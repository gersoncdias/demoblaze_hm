const HOME_PAGE = require("../page_elements/home_page").HOME_PAGE;

Cypress.Commands.add("validar_banner", () => {
  cy.get(HOME_PAGE.BODY.IMG_BANNER).should("be.visible");
});

