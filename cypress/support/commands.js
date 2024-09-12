const HOME_PAGE = require('../support/page_elements/home_page').HOME_PAGE

Cypress.Commands.add('validar_banner', () => {
    cy.get(HOME_PAGE.BODY.IMG_BANNER).should('be.visible')
})


// Valida o link "Home"
Cypress.Commands.add('validateHomeLink', () => {
    cy.get('#navbarExample').contains('Home').should('have.attr', 'href', 'index.html');
  });
  
  // Valida o link "Contact"
  Cypress.Commands.add('validateContactLink', () => {
    cy.get('#navbarExample').contains('Contact').should('have.attr', 'data-toggle', 'modal');
    cy.get('#navbarExample').contains('Contact').should('have.attr', 'data-target', '#exampleModal');
  });
  
  // Valida o link "About us"
  Cypress.Commands.add('validateAboutUsLink', () => {
    cy.get('#navbarExample').contains('About us').should('have.attr', 'data-target', '#videoModal');
  });
  
  // Valida o link "Cart"
  Cypress.Commands.add('validateCartLink', () => {
    cy.get('#navbarExample').contains('Cart').should('have.attr', 'href', 'cart.html');
  });
  
  // Valida o botão "Log in"
  Cypress.Commands.add('validateLoginLink', () => {
    cy.get('#navbarExample').contains('Log in').should('have.attr', 'data-target', '#logInModal');
    cy.get('#navbarExample').contains('Log in').should('be.visible');
  });
  
  // Valida o botão "Log out"
  Cypress.Commands.add('validateLogoutLink', () => {
    cy.get(' #navbarExample .nav-link#logout2').should('have.attr', 'onclick', 'logOut()');
    cy.get(' #navbarExample .nav-link#logout2').should('not.be.visible');
  });
  
  // Valida o botão "Sign up"
  Cypress.Commands.add('validateSignUpLink', () => {
    cy.get('#navbarExample .nav-link').contains('Sign up').should('have.attr', 'data-target', '#signInModal');
    cy.get('#navbarExample .nav-link').contains('Sign up').should('be.visible');
  });
  
  // Valida o nome do usuário (não visível por padrão)
  Cypress.Commands.add('validateUsernameDisplay', () => {
    cy.get('#navbarExample .nav-link#nameofuser').should('not.be.visible');
  });
  
