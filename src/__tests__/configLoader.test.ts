import { loadAngularConfig, loadAutRunnerConfig } from '../runner/configLoader';
import { readFile } from 'fs/promises';
import { AutRunnerConfig } from '../runner/types';

jest.mock('fs/promises');

const readFileOptions = { encoding: 'utf-8' };
let readFileMock: jest.MockedFunction<typeof readFile>;
let autRunnerConfigMock: AutRunnerConfig;

beforeEach(() => {
  readFileMock = readFile as jest.MockedFunction<typeof readFile>;
  autRunnerConfigMock = {};
});

describe('load angular config', () => {
  it('load angular.json', async () => {
    readFileMock.mockResolvedValue('{"projects": ["project1", "project2", "project3"]}');
    const retVal = await loadAngularConfig(autRunnerConfigMock);
    expect(retVal).toEqual({ projects: ['project1', 'project2', 'project3'] });
  });

  it('should use the path from runner config to load angular.json', async () => {
    autRunnerConfigMock.angularJson = 'file_not_exists';
    const retVal = await loadAngularConfig(autRunnerConfigMock);
    expect(readFileMock).toHaveBeenCalledWith(autRunnerConfigMock.angularJson, readFileOptions);
  });

  it('should use the default path for angular.json if not specified in runner config', async () => {
    const retVal = await loadAngularConfig(autRunnerConfigMock);
    expect(readFileMock).toHaveBeenCalledWith('./angular.json', readFileOptions);
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
    expect(retVal).toEqual({});
  });
});
