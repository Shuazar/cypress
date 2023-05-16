/// <reference types="Cypress"/>

it("type", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="phone-number"]')
    .type(2341234123)
    .should("be.visible");
});

it("focus", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="amount"]')
    .focus();
});

it("blure", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="amount"]')
    .focus()
    .blur();
});

it("cleer", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="amount"]')
    .clear()
    .type(999)
    .wait(2000)
    .clear();
});

it("submit", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('form[method="post"]')
    .submit();
});

it("click", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="debitSourceSource"]')
    .click();
});

it("uncheck", () => {
  cy.visit("https://en.privatbank.ua/")
    .get("#switch-input")
    .check({ force: true })
    .wait(2000)
    .uncheck({ force: true });
});

it.only("fortrade", () => {
  cy.visit("https://www.fortrade.com/create-user/")
    .get(".LC-FullUserRegistrationWidget")
    .get('input[name="FirstName"]')
    .type("Testa")
    .get('input[name="LastName"]')
    .type("Testu", { force: true })
    .get('input[name="Email"]')
    .type("123412341234@mailinator.com")
    .get('input[name="Phone"]')
    .type("13241234")
    .get('input[name="BtnNext"]')
    .click({ force: true })
    .get('select[name="Country"]')
    .select('AL')
});
