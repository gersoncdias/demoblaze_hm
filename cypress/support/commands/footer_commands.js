const FOOTER_PAGE = require("../page_elements/footer_page").FOOTER_PAGE;

Cypress.Commands.add("validar_div", () => {
  cy.get(FOOTER_PAGE.BODY.DIV).should("be.visible");
});

Cypress.Commands.add('validateAboutUsSection', (txt1, txt) => {
  cy.get('#footc #fotcont .col-sm-4 .thumbnail .caption h4.grrrr')
    .contains(txt1);
  cy.get('#footc #fotcont .col-sm-4 .thumbnail .caption p')
    .contains(txt);
});