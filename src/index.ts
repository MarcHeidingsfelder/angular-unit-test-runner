import { loadAngularConfig } from './configLoader';
import { extractProjectNames } from './mapper';
import { convertProjectsObjectToArray } from './objectToArray';
import { sortProjects } from './projectSorter';
import { executeTestForProject } from './testExecuter';

const runner = async (): Promise<void> => {
  const config = await loadAngularConfig();
  const projects = convertProjectsObjectToArray(config);
  sortProjects(projects);

  const projectNames = extractProjectNames(projects);
  
  for (const projectName of projectNames) {
    await executeTestForProject(projectName);
  }

  console.log('finished test runs for', projectNames.length, 'projects');
};

export default runner;
