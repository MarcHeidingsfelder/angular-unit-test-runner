import { Project } from '../types';
import { extractProjectNames } from '../mapper';

describe('extractProjectNames', () => {
  it('should return the project names for valid list of projects', () => {
    const projects: Project[] = [
      { name: 'project1', config: {} },
      { name: 'project2', config: {} },
      { name: 'project4', config: {} },
      { name: 'project3', config: {} },
    ];
    const expectedResult = ['project1', 'project2', 'project4', 'project3'];

    const result = extractProjectNames(projects);

    expect(result).toEqual(expectedResult);
  });

  it('should return an empty array for invalid input', () => {
    const result = extractProjectNames(undefined as unknown as Project[]);

    expect(result).toEqual([]);
  });
});
