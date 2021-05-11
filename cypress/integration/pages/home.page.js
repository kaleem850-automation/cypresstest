class HomePage {
  get header() {
    return cy.get('.App-header');
  }
  get txtName() {
    return cy.get('#name');
  }
  get txtCity() {
    return cy.get('#city');
  }
  get btnSubmit() {
    return cy.get('button[type="submit"]');
  }
  get btnClear() {
    return cy.contains('clear');
  }
  get appliedCol() {
    return cy.contains('Applied').parent().parent();
  }
  get interviewingCol() {
    return cy.contains('Interviewing').parent().parent();
  }
  get hiredCol() {
    return cy.contains('Hired').parent().parent();
  }

  launchApp() {
    cy.visit('/');
  }

  appliedCrew() {
    return this.filterCrew(this.appliedCol);
  }

  interviewingCrew() {
    return this.filterCrew(this.interviewingCol);
  }

  hiredCrew() {
    return this.filterCrew(this.hiredCol);
  }

  searchForName(name) {
    this.txtName.type(name);
    this.btnSubmit.click();
  }
  searchForLocation(location) {
    this.txtCity.type(location);
    this.btnSubmit.click();
  }

  moveCategory(name, fromcat, tocat) {
    if (
      (fromcat == 'applied' && tocat == 'interviewing') ||
      (fromcat == 'interviewing' && tocat == 'hired')
    ) {
      cy.contains(name).parents('.CrewMember-container').contains('>').click();
    }
  }

  filterCrew(category) {
    if (category.toLowerCase() == 'applied') {
      return this.appliedCol.find('.CrewMember-container');
    } else if (category.toLowerCase() == 'interviewing') {
      return this.interviewingCol.find('.CrewMember-container');
    }
    return this.hiredCol.find('.CrewMember-container');
  }
}

export default new HomePage();
