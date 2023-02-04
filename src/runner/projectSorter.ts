import { Project } from './types';

export const sortProjects = (projects: Project[]): void => {
  try {
    projects.sort((a, b) => {
      const posA = getPositionForProject(a, projects.length);
      const posB = getPositionForProject(b, projects.length);

      return posA - posB;
    });
  } catch {
    // need a logger
  }
};

export const getPositionForProject = (project: Project, defaultPosition: number): number => {
  return project.config?.cli?.metric ?? defaultPosition;
};
