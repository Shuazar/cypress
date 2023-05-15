/// <reference types="cypress" />
describe("tttt", () => {
  it("", () => {
    cy.visit("https://next.privat24.ua/mobile?/lang=en");
    cy.contains("Вхід");
  });

  it("", () => {
    cy.visit("https://next.privat24.ua/mobile?/lang=en");
    cy.contains("div", "Вхід");
  });

  it("", () => {
    cy.visit("https://next.privat24.ua/mobile?/lang=en");
    cy.contains("div", "Вхід".toUpperCase(), { matchCase: false });
  });
  it.only("", () => {
    cy.visit("https://next.privat24.ua/mobile?/lang=en");
    cy.get('footer').contains('API',{matchCase:false});
  });
});
