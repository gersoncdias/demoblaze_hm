const validation_data_header = require("../fixtures/header.json");
const validation_data_signup = require("../fixtures/signup.json");

describe("Validar Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve acessar o modal", () => {
    cy.acessar_modal_signup(
      validation_data_header.menu.sigin, validation_data_header.links.deful)
          
  });

  it("valida nome do modal", () => {
    cy.validar_modal_signup(validation_data_signup.modal.titulo)
          
  });
  
  it("inserir dados",() => {
    cy.acessar_modal_signup(
      validation_data_header.menu.sigin, validation_data_header.links.deful)
    cy.validar_inputs()
  });

  it("valida nome do modal user", () => {
    cy.acessar_modal_signup(
      validation_data_header.menu.sigin, validation_data_header.links.deful)
    cy.validar_texto_user(validation_data_signup.modal.user)
});

it("valida nome do modal senha", () => {
  cy.acessar_modal_signup(
    validation_data_header.menu.sigin, validation_data_header.links.deful)
  cy.validar_texto_senha(validation_data_signup.modal.senha)
});

it("Deve clicar no botão enviar", () => {
  cy.acessar_modal_signup(
    validation_data_header.menu.sigin, validation_data_header.links.deful)
  cy.validar_inputs()
  cy.clicar_no_botão_enviar(
    validation_data_signup.modal.botão)

});

it.only("Deve clicar no botão cancelar", () => {
  cy.acessar_modal_signup(
    validation_data_header.menu.sigin, validation_data_header.links.deful)
  //cy.validar_inputs()
  cy.clicar_no_botão_cancelar(
    validation_data_signup.modal.sair)

});
});

