# week-2-FACY-machine


###SET-UP WITH JASMINE
We decided to use Jasmine a popular testing framework that allows for both unit and integration testing. 

We had a spike at the beginning of our project to determine whether it would be feasible to implement this and having successfully run some basic tests we decided to continue using it.

### The setup process
1. `npm init` - To create a package.json file which while allow you to specify project dependencies, and define commands for running scripts such as testing scripts by writing `npm test`
1. `npm install jasmine --save-dev` 
1. In package.json we added a `"test-init": "jasmine init"` which allowed us to initialise our repo for jasmine testing.
1. We also setup browser sync by adding `"start: "browser-sync --server --no-notify --files '*.html,*.css,*.js'` which runs an auto-refreshing web server
