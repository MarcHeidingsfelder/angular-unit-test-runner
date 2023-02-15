import { AutState } from '@mh-code/angular-unit-test-state';
import { angularTestOptions } from './cliOptions';
import { loadAngularConfig, loadAutRunnerConfig } from './configLoader';
import { extractProjectNames } from './mapper';
import { convertProjectsObjectToArray } from './objectToArray';
import { sortProjects } from './projectSorter';
import { calcStatistics } from './statistics';
import { executeTestForProject } from './testExecuter';

const logger = console.log;

const restoreConsole = () => {
  console.log = logger;
};

const runner = async (): Promise<void> => {
  const autRunnerConfig = await loadAutRunnerConfig();
  const angularConfig = await loadAngularConfig(autRunnerConfig);
  const projects = convertProjectsObjectToArray(angularConfig);

  sortProjects(projects);
  const projectNames = extractProjectNames(projects);
  const ngTestOptions = angularTestOptions();

  for (const projectName of projectNames) {
    AutState.currentProject = projectName;
    await executeTestForProject(projectName, ngTestOptions);
    restoreConsole();
  }

  calcStatistics();
};

export default runner;
