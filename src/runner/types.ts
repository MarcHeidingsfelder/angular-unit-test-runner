export declare type ProjectConfig = any;
export declare type ProjectConfigProperty = { [keys: string]: ProjectConfig };
export declare type AngularConfig = { projects: ProjectConfigProperty };
export declare type Project = { name: string; config: ProjectConfig };

export declare type AutRunnerConfig = {
  angularJson?: string;
};

export declare type TestResult = {
  projectName: string;
  tests: number;
  succeeded: number;
  failed: number;
  skipped: number;
};
