import { loadAngularConfig } from '../configLoader';
import { readFile } from 'fs/promises';

jest.mock('fs/promises');

const readFileMock = readFile as jest.MockedFunction<typeof readFile>;

describe('load angular config', () => {
  it('load angular.json', async () => {
    readFileMock.mockResolvedValue('{"projects": ["project1", "project2", "project3"]}');
    const retVal = await loadAngularConfig();
    expect(retVal).toEqual({ projects: ['project1', 'project2', 'project3'] });
  });

  it('returns empty object on error', async () => {
    readFileMock.mockRejectedValue('');
    const retVal = await loadAngularConfig();
    expect(retVal).toEqual({ projects: {} });
  });
});
