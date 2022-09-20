import { loadAngularConfig } from "./configLoader";
import { extractProjectNames } from "./mapper";
import { convertProjectsObjectToArray } from "./objectToArray";
import { sortProjects } from "./projectSorter";

const runner = async ():Promise<string[]> => {
    const config = await loadAngularConfig();
    const projects = convertProjectsObjectToArray(config);
    sortProjects(projects);
    return extractProjectNames(projects);
}

export default runner;