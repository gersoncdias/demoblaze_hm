const FOOTER_PAGE = require("../page_elements/footer_page").FOOTER_PAGE;

Cypress.Commands.add("validar_div", () => {
  cy.get(FOOTER_PAGE.BODY.DIV).should("be.visible");
});

Cypress.Commands.add('validateAboutUsSection', (txt1, txt) => {
  cy.get(FOOTER_PAGE.BODY.SECTIONS.TITLE)
    .contains(txt1);
  cy.get(FOOTER_PAGE.BODY.SECTIONS.BODY)
    .contains(txt);
});