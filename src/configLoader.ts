import { readFile } from 'fs/promises';
import { AngularConfig, AutRunnerConfig } from './types';

export const loadAngularConfig = async (autRunnerConfig: AutRunnerConfig): Promise<AngularConfig> => {
  const pathToAngularJson = autRunnerConfig.angularJson ?? './angular.json';
  const defaultReturnValue: AngularConfig = { projects: {} };
  return loadConfig(pathToAngularJson, defaultReturnValue);
};

export const loadAutRunnerConfig = async (): Promise<AutRunnerConfig> => {
  const defaultReturnValue: AutRunnerConfig = {};
  return loadConfig('./aut-runner.json', defaultReturnValue);
};

async function loadConfig<T>(path: string, defaultValue: T): Promise<T> {
  try {
    const configJson = await readFile(path, { encoding: 'utf-8' });
    return JSON.parse(configJson);
  } catch (error) {
    return defaultValue;
  }
}
