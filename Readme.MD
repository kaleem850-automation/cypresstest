## QA UI Automation Framework with Cypress

### Highlights
* Page object model
* BDD with Cucumber
* Beautiful HTML Reports
* Execute the scripts in Docker container
* Modular structure
* Easy maintenance
  
### Pre - requisites
* Node JS
* Chrome or any other browser supported by Cypress
* Git(Optional - Needed only if you want to clone this project)
* IDE(Optional - Needed if you want to do any changes to this project)
* Docker(Optional - Needed only if you want to execute the scripts in docker container)

### Steps to run in local
* Clone or download the project
* Execute the command `npm install` in project root directory to install the dependencies
* Execute the command `npm run chrome` to exeucte the scripts in chrome browser
* Execute the command `npm run chrome:headless` to exeucte the scripts in chrome headless browser
* Execute the command `npm run report` to generate the HTML reports (HTML Reports are generated in `cypress/report/html`)

### Steps to run in docker container
* It is easy to exeucte the scripts in Cypress provided container (cypress/included:3.2.0). Execute the command `docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.2.0`
* If you want to build docker images with scripts included 
  * Execute the command `docker build -t <imagename> .`
  * Execute the command `docker container start -i <id>` to execute the scripts


