const HEADER_PAGE = require("../page_elements/header_page").HEADER_PAGE;


Cypress.Commands.add("validar_logo", () => {
  cy.get(HEADER_PAGE.IMG_LOGO)
    .should("be.visible")
    .should("have.attr", "href", "index.html");
});
Cypress.Commands.add("validar_links", (txt, link) => {
  cy.get(HEADER_PAGE.DIV_HEADER)
    .should("be.visible")
    .contains(txt)
    .should("have.attr", "href", link);
});
