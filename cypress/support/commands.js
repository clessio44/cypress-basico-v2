Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function(){
    cy.get("#firstName").type("Clessio");
    cy.get("#lastName").type("Silva");
    cy.get("#email").type("clessiosilva44@gmail.com");
    cy.get("#open-text-area").type("Teste");
    cy.contains("button", "Enviar").click();
})