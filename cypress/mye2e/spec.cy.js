describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://next.privat24.ua/deposit/open");
    cy.get("tbody").find("td").find("div").find("button").eq("0");
  });

  it("Using Get with Find Eq", () => {
    cy.viewport(1700,800)
    cy.visit("https://docs.cypress.io/api/commands/eq#syntax");
    cy.get('aside').find('div').find('ul').find('li').find('a');
  });

  it("Using Get with Find Eq ", () => {
    cy.viewport(17,800)
    cy.visit("https://docs.cypress.io/api/commands/eq#syntax");
    cy.get('aside').find('div').find('ul').find('li').find('a');
  });
  it("Using Get with Find Eq ", () => {
    cy.viewport(1700,800)
    cy.visit("https://docs.cypress.io/api/commands/eq#syntax");
    cy.get('aside').find('div').find('ul').find('li').find('a');
  });
  //===========================================
});


