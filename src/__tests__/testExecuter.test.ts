import { executeTestForProject } from '../runner/testExecuter';
import cli from '@angular/cli';

jest.mock('@angular/cli');

describe('test executer', () => {
    
    const logFunction = console.log;
    let cliMock: jest.MockedFunction<typeof cli>;
    
    beforeEach(() => {
        console.log = logFunction;
        cliMock = cli as jest.MockedFunction<typeof cli>;
    });

    it('should log the project name', () => {
        const logSpy = jest.spyOn(console, 'log');
        const projectName = 'test_1';

        executeTestForProject(projectName, []);

        expect(logSpy).toBeCalledWith('run tests for', projectName);
    });

    it('should call the angular cli', () => {
        const projectName = 'test_1';

        executeTestForProject(projectName, []);

        expect(cliMock).toBeCalled();
    });

    it('should call the angular cli with the project name and the test option', () => {
        const projectName = 'test_1';

        executeTestForProject(projectName, []);

        expect(cliMock).toHaveBeenCalledWith({ cliArgs: ['test', projectName] });
    });

    it('should call the angular cli with the provided arguments', () => {
        const projectName = 'test_1';

        const testArguments = ['hello', 'world'];
        const expectArguments = ['test', projectName, ...testArguments];

        executeTestForProject(projectName, testArguments);

        expect(cliMock).toHaveBeenCalledWith({ cliArgs: expectArguments });
    });
});