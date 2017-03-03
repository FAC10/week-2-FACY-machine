# fncY Machine
![Picture of Jeff Goldblum](appifiying-wordpress-practical-tips-for-using-wordpress-as-a10286951.jpg)

Run `npm start`, run `npm test` to test.
## Initial project set-up
1. `npm init` - To create a package.json file to specify project dependencies and define commands for easily running scripts (e.g. for testing).


## Jasmine for testing
[Jasmine](https://github.com/jasmine/jasmine-npm) is a popular testing framework that allows for both unit and integration testing.

We did a spike at the beginning of our project to determine whether it would be feasible to learn and implement Jasmine rather than QUnit (which we'd already been taught). We managed to get some basic tests running pretty quickly and decided to use it for the rest of the project.

### Jasmine set-up
1. `npm install jasmine --save-dev` 
1. Add `"test-init": "jasmine init"` to the "scripts" section of `package.json`. This initialises our repo for Jasmine testing when we run `npm run test-init` (only required once).
1. Add `"test": "jasmine"` to the "scripts" section of `package.json`. This runs our test suite when we run `npm test`.

### Browser-sync set-up
1. `nom install browser-sync --save-dev`
1. Add `"start: "browser-sync --server --no-notify --files '*.html,*.css,*.js'` to the "scripts" section of `package.json`. This starts an auto-refreshing web server when we run `npm start`.
