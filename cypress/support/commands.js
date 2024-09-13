const HOME_PAGE = require('../support/page_elements/home_page').HOME_PAGE
const HEADER_PAGE = require('../support/page_elements/header_page').HEADER_PAGE
const CATEGORIA_PAGE = require('../support/page_elements/categoria_page').CATEGORIA_PAGE

Cypress.Commands.add('validar_banner', () => {
    cy.get(HOME_PAGE.BODY.IMG_BANNER).should('be.visible')
})
Cypress.Commands.add('validar_logo', () => {
    cy.get(HEADER_PAGE.IMG_LOGO).should('be.visible').should('have.attr', 'href', 'index.html');
})
Cypress.Commands.add('validar_links', () => {
    cy.get(HEADER_PAGE.DIV_HEADER).should('be.visible').contains('Home').should('have.attr', 'href', 'index.html')
})
Cypress.Commands.add('validar_telefone', () => {
    cy.get(CATEGORIA_PAGE.DIV_TELEFONE).should('be.visible')
})