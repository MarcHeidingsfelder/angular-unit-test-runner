import { angularTestOptions } from '../runner/cliOptions';

describe('cli options', () => {
   
    beforeEach(() => {
        process.argv =  ['node-location', 'project']
    });

    it('should return the options for ng test', () => {
        const ngTestOptions = ['--karma-config=extra.conf.js', '--watch=true'];
        process.argv.push(...ngTestOptions);

        const angularOptions = angularTestOptions();

        expect(angularOptions).toEqual(ngTestOptions);
    });

    it('should return autRunnerOptions', () => {
        const ngTestOptions = ['--test'];
        process.argv.push(...ngTestOptions);

        const angularOptions = angularTestOptions();

        expect(angularOptions).toEqual([]);
    });

    it('should only return the options for ng test', () => {
        const ngTestOptions = ['--karma-config=extra.conf.js', '--watch=true'];
        const allOptions = ['--test', ...ngTestOptions];
        process.argv.push(...allOptions);

        const angularOptions = angularTestOptions();

        expect(angularOptions).toEqual(ngTestOptions);
    });
    
});