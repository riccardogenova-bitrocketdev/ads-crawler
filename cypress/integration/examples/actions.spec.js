/** @format */

/// <reference types="Cypress" />

context('subito', () => {
  it('login', () => {
    cy.visit('https://www.subito.it/');
    cy.get('.sbt-text-atom.token-body.size-normal.weight-semibold').click();
    cy.wait(5000);
    cy.get('#login_email').type('riccardogenova@icloud.com');
    cy.get('#login_passwd').type('pedrorik23');
    cy.get('.btn_large').click();
    cy.wait(3000);
    cy.get('.usermenu-item.messagges').click({ force: true });
  });
});
