import cli from '@angular/cli';
import { state } from './state';

export const executeTestForProject = async (projectName: string): Promise<number> => {
  state.currentProjectName = projectName;

  console.log('run tests for', projectName);
  const cliArgs = ['test', projectName, '--watch=false'];
  return cli({ cliArgs });
};
