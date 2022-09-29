import cli  from '@angular/cli';

export const executeTestForProject = async (projectName: string): Promise<number> => {
    console.log('run tests for', projectName);
    const cliArgs = ['test', projectName, '--watch=false'];
    return cli({ cliArgs });
}