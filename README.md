# Angular Unit Test Runner

This is a test runner for angular projects.
It provides the possibilities to run unit test on a single project or on all sub-projects (applications and libraries) of the current solution.
If used in combination with the [AutReporter](https://www.npmjs.com/package/@mh-code/angular-karma-reporter), this runner provides statistics for the test.
Information like count of executed tests and how many succeeded plus a summary over all tested projects will be printed to the console.

# Installation
Install the test runner
```bash
npm i --save-dev @mh-code/angular-unit-test-runner
```

# Configuration
To configure the behavior of the runner, create a aut-runner.json next to your package.json
```json
{
  "angularJson": "./angular.json"
}
```
Properties:
- angularJson: The path to the angular.json file. If not provided, './angular.json' will be used

You can set the execution order by adding the metric key to the cli property of the project in the angular.json
``` json
"projects": {
  "awesome-project": {
    "cli": {
      "metric": 2
    },
  }
}
```

# Commands
Execute the runner from command line.
Use the alias from the cli registration.
```bash
aut-runner
```
Execute the runner as npm script.
Add a script entry to your package.json
```json
"scripts": {
  "test": "aut-runner"
}
```

### Options
You can pass all options which you can pass to ng-test.

Cli
```bash
aut-runner --watch=false
```
package.json
```json
"scripts": {
  "test": "aut-runner --watch=false"
}
```

# Next steps
- Further configurations
- Statistic reporter, which provides test result for all projects and a summery in various formats (json, xml, log table)