# Angular Unit Test Runner

This will be a test runner for angular projects.
It will provide the possibilities to run unit test on a single project or on all projects (applications and libraries) of the current solution.

Install the test runner
```bash
npm i --save-dev angular-unit-test-runner
```

Register a script in the package.json

```json
{
  "scripts": {
    "test-runner": "aut-runner"
  }
}
```

To configure the behavior of the runner, create a aut-runner.json next to your package.json
```json
{
  "angularJson": "./angular.json"
}
```
Properties:
- angularJson: The path to the angular.json file. If not provided, './angular.json' will be used


At the moment, this package does not much more as 
```bash
ng test
```
Next steps will be
- Further configurations
- Html to file reporter, which save test report under the project name
- Statistic reporter, which provides test result for all projects and a summery in various formats (json, xml, log table)