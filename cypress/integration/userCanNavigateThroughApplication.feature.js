describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("is expected to display Yesterday News Header", () => {
    cy.get("[data-cy=header").should("contain", "Yesterdays News");
  });
});
