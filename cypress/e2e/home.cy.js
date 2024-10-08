const validation_data_header = require("../fixtures/header.json");
const validation_data_footer = require("../fixtures/footer.json");

describe("Validar Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Deve acessar a pagina princípal", () => {
    cy.validar_banner();
    cy.validar_logo();

  });
  it.only("Deve validar o Footer", () => {
    cy.validar_div();
    cy.validateAboutUsSection(validation_data_footer.title, validation_data_footer.text)
    cy.validateGetInTouchSection(validation_data_footer.get_touch, validation_data_footer.adress, validation_data_footer.telephone, validation_data_footer.email);
    cy.validateProductStoreSection(validation_data_footer.product_store)
    cy.validatecopyright(validation_data_footer.copyright)
  });

  it("Deve validar o header", () => {
    cy.validateProductStore(validation_data_header.logo.text)
    cy.validar_logo();
    cy.validar_links(
      validation_data_header.menu.home,
      validation_data_header.links.index)
    cy.validar_links(
      validation_data_header.menu.contact, validation_data_header.links.deful)
    cy.validar_links(
      validation_data_header.menu.about, validation_data_header.links.deful)
    cy.validar_links(
      validation_data_header.menu.cart,
      validation_data_header.links.cart)
    cy.validar_links(
      validation_data_header.menu.login, validation_data_header.links.deful)
    cy.validar_links(
      validation_data_header.menu.sigin, validation_data_header.links.deful)
          
  });
  
});

