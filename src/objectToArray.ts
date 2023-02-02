import { AngularConfig, Project } from './types';

export const convertProjectsObjectToArray = (config: AngularConfig): Project[] => {
  const projectsArray: Project[] = [];

  try {
    const projectNames = Object.keys(config.projects);
    for (const projectName of projectNames) {
      projectsArray.push({ name: projectName, config: config.projects[projectName] });
    }
  } catch {
    return [];
  }

  return projectsArray;
};
