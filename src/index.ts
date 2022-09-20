import { readFile } from "fs/promises";

export const Runner = (project: string):string => `run tests for project ${project}`;

export const loadAngularConfig = async ():Promise<AngularConfig> => {
    try {
        const configJson = await readFile('./angular.json', { encoding: 'utf-8' });
        return JSON.parse(configJson);
    } catch (error) {
        return { projects: {} };
    }

} 

declare type AngularConfig = { [keys: string]: unknown };