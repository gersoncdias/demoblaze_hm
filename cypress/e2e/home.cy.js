const validation_dataheader = require('../fixtures/header.json')

describe('Validar Home Page', () => {
  it('Deve acessar a pagina princípal', () => {
    cy.visit('/')
    cy.validar_banner()
    cy.validar_logo()
    cy.validar_links(validation_dataheader.menu.home, validation_dataheader.links.index )
  })
})