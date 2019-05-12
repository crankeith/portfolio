# Development Portfolio

## Project
This project is a express/node application that serves a portfolio of projects I've completed throughout my Techdegree a Treehouse (http://teamtreehouse.com).

###Extra Credit

- I've set up my package.json to utilize npm start and test. See development notes below.
- I've added error handling for the following scenarios:
    - Project route sends back a 400 error if project id in path doesn't exist
    - Project route sends back a 500 error if the data.json file has duplicate project ids.
    - If a route doesn't exist, a 404 error is flagged
- I've update the css and changed the following: 
    - Background color of the left side panel
    - Profile image now has a border radius
    - Font colors changed in buttons, links and left panel
    - Font changed to Open Sans

##Development
###npm commands
`npm start` - Runs nodemon to start the application.

`npm test` - Runs nodemon with --inspect flag for chrome dev tools usage. 
