describe('Validar Home Page', () => {
  it('Deve acessar a pagina princípal', () => {
    cy.visit('/')
    cy.validar_banner()
    cy.validateHomeLink()
    cy.validateContactLink()
    cy.validateAboutUsLink()
    cy.validateCartLink()
    cy.validateLoginLink()
    cy.validateLogoutLink()
    cy.validateSignUpLink()
    cy.validateUsernameDisplay()
  })
})