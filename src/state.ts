import { TestResult } from "./types";

const emptyResult: TestResult = { projectName: '', tests: 0, succeeded: 0, failed: 0, skipped: 0 };

class State {
    public currentProjectName: string = '';

    public results = new Map<string, TestResult>();
    public summary: TestResult = emptyResult;
}

export const state = new State();