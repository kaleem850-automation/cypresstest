import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../pages/home.page';

Given('the crew application is launched', () => {
  HomePage.launchApp();
});

When('the crew application is loaded', () => {
  HomePage.header.should('be.visible');
});

Then('the crew count for {string} is {string}', (category, count) => {
  HomePage.filterCrew(category).should('have.length', count);
});

When(
  'I move {string} application from {string} to {string}',
  (name, fromcat, tocat) => {
    HomePage.moveCategory(name, fromcat.toLowerCase(), tocat.toLowerCase());
  }
);

When('I search for name {string}', (name) => {
    HomePage.searchForName(name)
});

When('I search for location {string}', (loc) => {
    HomePage.searchForLocation(loc)
});
