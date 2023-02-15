import cli from '@angular/cli';

export const executeTestForProject = async (projectName: string, params: string[]): Promise<number> => {
  console.log('run tests for', projectName);
  const cliArgs = ['test', projectName, ...params];
  return cli({ cliArgs });
};
