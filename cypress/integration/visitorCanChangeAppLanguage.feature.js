/* eslint-disable no-undef */
describe("Visitor can change application language", () => {
  before(() => {
    cy.intercept("GET", "/api/articles", {
      body: { articles: [] },
    });
    cy.visit("/");
  });

  describe('by choosing "swedish"', () => {
    before(() => {
      cy.get("[data-cy=language-dropdown]").as("dropdown");
      cy.get("@dropdown").click();
      cy.contains("Swedish").click();
    });

    it("is expected to display application name in Swedish", () => {
      cy.get("[data-cy=title]").should("contain.text", "Gårdagens Blaska");
    });
  });

  describe('by choosing "english"', () => {
    before(() => {
      cy.get("[data-cy=language-dropdown]").as("dropdown");
      cy.get("@dropdown").click();
      cy.contains("Engelska").click();
    });

    it("is expected to display application name in English", () => {
      cy.get("[data-cy=title]").should("contain.text", "Yesterdays News");
    });
  });
});
