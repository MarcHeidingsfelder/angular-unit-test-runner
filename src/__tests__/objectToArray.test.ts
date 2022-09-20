import { AngularConfig, Project } from '../types';
import { convertProjectsObjectToArray } from '../objectToArray';

describe('convertProjectsObjectToArray', () => {

    it('should return a Project array from a AngularConfig', () => {
        const config: AngularConfig = {
            projects: {
                project1: { project1Prop: true },
                project2: { project2Prop: 42 },
                project3: { project3Prop: 'T' }
            }
        };
        const expected: Project[] = [
            { name: 'project1', config: { project1Prop: true } },
            { name: 'project2', config: { project2Prop: 42 } },
            { name: 'project3', config: { project3Prop: 'T' } },
        ];

        const result = convertProjectsObjectToArray(config);

        expect(result)
            .toEqual(expected);
    });

    it('should return an empty array for invalid input', () => {
        const result = convertProjectsObjectToArray({} as unknown as AngularConfig);

        expect(result)
            .toEqual([]);
    })

});