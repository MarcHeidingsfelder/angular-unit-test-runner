// --test is for the unit tests till autRunner Options are implemented
const autRunnerOptions: string[] = ['--test'];

const getCliOptionsFromProcessArgs = ()=> process.argv.slice(2);
const splitOptionName = (option: string) => option.split('=')[0]?.trim();
const splitOptionValue = (option: string) => option.split('=')[1]?.trim();


export const angularTestOptions = ():string[] => {
    const options = getCliOptionsFromProcessArgs();
    return options.filter(option =>
        !autRunnerOptions.some(autOption => autOption === splitOptionName(option))
    );
}