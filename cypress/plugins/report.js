const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/report/json',
	reportPath: 'cypress/report/html',
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Test'},
          ]
    }
});