describe("Visitor can see a Header and list of articles", () => {
  before(() => {
    cy.visit("/");
  });
  it("is expected to display Yesterday News Header", () => {
    cy.get("[data-cy=header").should("contain", "Yesterdays News");
  });
});
