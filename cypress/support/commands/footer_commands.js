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
  Cypress.Commands.add("validateGetInTouchSection", (txt, txt1, txt2, txt3) => {
    cy.get(FOOTER_PAGE.BODY.SECTIONS_3.TITLE)
      .should("be.visible")
      .contains(txt);
    cy.get(FOOTER_PAGE.BODY.SECTIONS_3.BODY)
      .should("be.visible")
      .contains(txt1);
    cy.get(FOOTER_PAGE.BODY.SECTIONS_3.BODY)
      .should("be.visible")
      .contains(txt2);
    cy.get(FOOTER_PAGE.BODY.SECTIONS_3.BODY)
      .should("be.visible")
      .contains(txt3);
  });

Cypress.Commands.add('validateProductStoreSection', (text) => {
  cy.get(FOOTER_PAGE.BODY.SECTIONS_4.TITLE) 
    .should("be.visible")
    .contains(text);

});