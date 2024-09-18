const validation_dataheader = require("../fixtures/header.json");
const validation_data_footer = require("../fixtures/footer.json");

describe("Validar Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Deve acessar a pagina princípal", () => {
    cy.validar_banner();
    cy.validar_logo();
    cy.validar_links(
      validation_dataheader.menu.home,
      validation_dataheader.links.index
    );
  });
  it("Deve validar o Footer", () => {
    cy.validar_div();
    cy.validateAboutUsSection(validation_data_footer.title, validation_data_footer.text)
  });
});
