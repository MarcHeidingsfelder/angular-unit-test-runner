import * as runner from '../runner/index';

describe('aut-runner', () => {
    
    it('should do something', (done:any) => {
        const runnerFunction = runner.default;
        runnerFunction().then(() => {
            console.log('done');
            expect(true).toBeTruthy();
            done();
        })
    });

})