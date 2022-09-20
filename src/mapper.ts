import { Project } from "./types";

export const extractProjectNames = (projects: Project[]): string[] => {
    try {
        return projects.map(project => project.name);
    } catch  {
        return [];
    }    
}
