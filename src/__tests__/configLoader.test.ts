import { loadAngularConfig, loadAutRunnerConfig } from '../configLoader';
import { readFile } from 'fs/promises';
import { AutRunnerConfig } from '../types';

jest.mock('fs/promises');

const readFileMock = readFile as jest.MockedFunction<typeof readFile>;

describe('load angular config', () => {
  const autRunnerConfigMock: AutRunnerConfig = {};
  it('load angular.json', async () => {
    readFileMock.mockResolvedValue('{"projects": ["project1", "project2", "project3"]}');
    const retVal = await loadAngularConfig(autRunnerConfigMock);
    expect(retVal).toEqual({ projects: ['project1', 'project2', 'project3'] });
  });

  it('returns empty object on error', async () => {
    readFileMock.mockRejectedValue('');
    const retVal = await loadAngularConfig(autRunnerConfigMock);
    expect(retVal).toEqual({ projects: {} });
  });
});

describe('load aut-runner config', () => {
  it('load aut-runner.json', async () => {
    const configMock: AutRunnerConfig = { angularJson: 'hello' };
    const mockResponse = JSON.stringify(configMock);
    readFileMock.mockResolvedValue(mockResponse);
    const retVal = await loadAutRunnerConfig();
    expect(retVal).toEqual(configMock);
  });

  it('returns empty object on error', async () => {
    readFileMock.mockRejectedValue('');
    const retVal = await loadAutRunnerConfig();
    expect(retVal).toEqual({ });
  });
});
