describe("Visitor can see a Header and list of articles", () => {
  before(() => {
    cy.intercept("GET", "**/api/articles", {
      fixture: "tempFixture.fixture.json",
    });
    cy.visit("/");
  });

  it("is expected to display Yesterday News Header", () => {
    cy.get("[data-cy=header").should("contain", "Yesterdays News");
  });

  it("is expected to see a collection of articles", () => {
    cy.get("[data-cy=article-collection]").children().should("have.length", 3);
  });

  it("is expected to see article title", () => {
    cy.get("[data-cy=article-collection]")
      .children()
      .first()
      .within(() => {
        cy.get("[data-cy=article-collection-title]").should(
          "contain",
          "Latin News"
        );
      });
  });

  it("is expected to see article body", () => {
    cy.get("[data-cy=article-collection]")
      .children()
      .first()
      .within(() => {
        cy.get("[data-cy=article-collection-body]").should(
          "contain",
          "Lorem ipsum"
        );
      });
  });

  it("is expected to see article body", () => {
    cy.get("[data-cy=article-collection]")
      .children()
      .first()
      .within(() => {
        cy.get("[data-cy=article-collection-created]").should(
          "contain",
          "2021-12-07"
        );
      });
  });
});
