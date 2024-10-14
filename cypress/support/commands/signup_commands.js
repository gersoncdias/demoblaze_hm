const { SINGUP_PAGE } = require("../page_elements/signup_page");

const HEADER_PAGE = require("../page_elements/header_page").HEADER_PAGE;

Cypress.Commands.add("acessar_modal_signup", (txt, link) => {
    cy.get(HEADER_PAGE.DIV_HEADER)
      .should("be.visible")
      .contains(txt)
      .should("have.attr", "href", link).click();
  });

Cypress.Commands.add('validar_modal_signup', (txt) => {
    cy.get( SINGUP_PAGE.MODAL.Titulo)
      .contains(txt) ;
  });

Cypress.Commands.add('validar_campos', (txt) => {
    cy.get( SINGUP_PAGE.MODAL.Titulo)
      .contains(txt) ;
    });

Cypress.Commands.add('validar_inputs_invalido', ()=> {
      cy.get( SINGUP_PAGE.MODAL.username).focus().clear().type('teste')
      cy.get( SINGUP_PAGE.MODAL.senha).type(' ')
      
     });
Cypress.Commands.add('validar_inputs_valido', ()=> {
      cy.get( SINGUP_PAGE.MODAL.username).focus().clear().type('teste')
      cy.get( SINGUP_PAGE.MODAL.senha).type('123')
     });


Cypress.Commands.add('validar_texto_user', (txt) => {
      cy.get(SINGUP_PAGE.MODAL.User)
        .contains(txt) ;
    });
    
Cypress.Commands.add('validar_texto_senha', (txt) => {
      cy.get(SINGUP_PAGE.MODAL.password)
        .contains(txt) ;
    });

Cypress.Commands.add("clicar_no_botão_enviar", (txt) => {
      cy.get(SINGUP_PAGE.MODAL.botão)
        .should("be.visible")
        .contains(txt).click();
    });

Cypress.Commands.add("clicar_no_botão_cancelar", (txt) => {
      cy.get(SINGUP_PAGE.MODAL.close)
        .should("be.visible")
        .should("have.text", txt).invoke('click');
      cy.get(SINGUP_PAGE.MODAL.close)
        .should("not.be.visible");
    });

Cypress.Commands.add('validarAlert', (text) => {
      cy.on('window:alert', (txt) => {
        expect(txt).to.contains(text);
      });
});
      

Cypress.Commands.add('clicar_no_botao_X', () => {
   cy.get(SINGUP_PAGE.MODAL.btn_header_close)
          .should('be.visible')
          .invoke('click');
        cy.get(SINGUP_PAGE.MODAL.close)
          .should("not.be.visible");
});
  