import { Runner } from '../index';

test('Runner', () => {
  expect(Runner('sorsan')).toBe('run tests for project sorsan');
});
