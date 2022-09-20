import { Project } from '../types';
import { sortProjects } from '../projectSorter';

describe('sortProjects', () => {
  it('should sort projects in correct order', () => {
    const project1: Project = { name: 'project1', config: undefined };
    const project2: Project = { name: 'project2', config: { cli: { metric: 1 } } };

    const projects: Project[] = [project1, project2];
    const expected: Project[] = [project2, project1];

    sortProjects(projects);

    expect(projects).toEqual(expected);
  });
});
