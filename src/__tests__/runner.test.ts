import { readFile } from "fs/promises";

import { Runner, loadAngularConfig } from '../index';

test('Runner', () => {
  expect(Runner('sorsan')).toBe('run tests for project sorsan');
});


jest.mock('fs/promises');//.createMockFromModule('fs');
// jest.mock('readFile');
const readFileMock = readFile as jest.MockedFunction<typeof readFile>;

describe('load angular config', () => {
  
  it('load angular.json', async() => {
    readFileMock.mockResolvedValue('{"projects": ["project1", "project2", "project3"]}');
    const retVal = await loadAngularConfig();
    expect(retVal)
      .toEqual({ "projects": ["project1", "project2", "project3"] });
  });


});
