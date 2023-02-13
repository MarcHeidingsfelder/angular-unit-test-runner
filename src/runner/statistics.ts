import { AutState } from '@mh-code/angular-unit-test-state';

export const calcStatistics = () => {
  let sumTotal = 0;
  let sumSuccess = 0;
  let sumSkipped = 0;
  let sumFailed = 0;
  let sumNetTime = 0;

  const summary: { [keys: string]: any } = {};
  const summaryKey = 'total';

  console.log('###################### results #####################');
  console.log('got', AutState.resultCount(), 'results');

  const results = AutState.getResults();
  for (const [key, value] of results) {
    const { total, success, skipped, failed } = value;
    const netTime = value.netTime / 1000;
    summary[key] = { total, success, skipped, failed, netTime };
    sumTotal += total;
    sumSuccess += success;
    sumSkipped += skipped;
    sumFailed += failed;
    sumNetTime += netTime;
  }

  summary[summaryKey] = {
    total: sumTotal,
    success: sumSuccess,
    skipped: sumSkipped,
    failed: sumFailed,
    netTime: sumNetTime,
  };

  console.log(summary);
};
