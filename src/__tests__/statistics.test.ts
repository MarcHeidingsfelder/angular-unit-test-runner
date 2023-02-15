import { AutResult, AutState } from '@mh-code/angular-unit-test-state';
import { calcStatistics } from '../runner/statistics';

jest.mock('@mh-code/angular-unit-test-state');

describe('calculate statistics', () => {
  const logFunction = console.log;

  beforeEach(() => {
    console.log = logFunction;
    resetState();
  });

  it('should log the result separator line', () => {
    const logSpy = jest.spyOn(console, 'log');

    calcStatistics();

    expect(logSpy).toBeCalledWith('###################### results #####################');
  });

  it('should log the amount of test results', () => {
    const logSpy = jest.spyOn(console, 'log');
    jest.spyOn(AutState, 'resultCount').mockReturnValue(3);

    calcStatistics();

    expect(logSpy).toBeCalledWith('got', 3, 'results');
  });

  it('should log the test summary', () => {
    const logSpy = jest.spyOn(console, 'log');

    calcStatistics();

    expect(logSpy).toBeCalledWith({
      total: {
        failed: 0,
        netTime: 0,
        skipped: 0,
        success: 0,
        total: 0,
      },
    });
  });

  it('should log test result with summary', () => {
    const logSpy = jest.spyOn(console, 'log');

    const result1: AutResult = { failed: 1, netTime: 5000, skipped: 2, success: 5, total: 8 };
    const result2: AutResult = { failed: 5, netTime: 3000, skipped: 1, success: 3, total: 9 };
    const results = new Map<string, AutResult>();
    results.set('result-1', result1);
    results.set('result-2', result2);

    jest.spyOn(AutState, 'getResults').mockReturnValue(results.entries());

    calcStatistics();

    expect(logSpy).toBeCalledWith({
      'result-1': convertMillisecondsToSeconds(result1),
      'result-2': convertMillisecondsToSeconds(result2),
      total: {
        failed: 6,
        netTime: 8,
        skipped: 3,
        success: 8,
        total: 17,
      },
    });
  });
});

function resetState() {
  const results = new Map<string, AutResult>();
  jest.spyOn(AutState, 'getResults').mockReturnValue(results.entries());
  jest.spyOn(AutState, 'resultCount').mockReturnValue(0);
}

function convertMillisecondsToSeconds(result: AutResult): AutResult {
  const netTime = result.netTime;
  result.netTime = netTime / 1000;
  return result;
}
