describe('Validar Home Page', () => {
  it('Deve acessar a pagina princípal', () => {
    cy.visit('/')
    cy.validar_banner()
    cy.validar_logo()
    cy.validar_links()
    cy.validar_telefone()
  })
})