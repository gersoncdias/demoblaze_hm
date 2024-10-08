import "./commands/home_commands";
import "cypress-plugin-xhr-toggle";
import "./commands/header_commands";
import "./commands/footer_commands";
import "./commands/signup_commands";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });