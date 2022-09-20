import { readFile } from 'fs/promises';
import { AngularConfig } from './types';

export const loadAngularConfig = async (): Promise<AngularConfig> => {
  try {
    const configJson = await readFile('./angular.json', { encoding: 'utf-8' });
    return JSON.parse(configJson);
  } catch (error) {
    return { projects: {} };
  }
};
