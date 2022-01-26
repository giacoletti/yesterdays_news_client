/* eslint-disable no-undef */
describe("Visitor can chage application language", () => {
  
  describe('by choosing "swedish"', () => {
    before(() => {
      cy.visit("/");
      cy.get("[data-cy=language-dropdown]").as("dropdown");
      cy.get("@dropdown").click();
      cy.contains("Swedish").click();
    });

    it("is expected to display application name in Swedish", () => {
      cy.get("[data-cy=header]").should("contain.text", "Gårdagens Nyheter");
    });
  });

  describe('by choosing "english"', () => {
    before(() => {
      cy.visit("/");
      cy.get("[data-cy=language-dropdown]").as("dropdown");
      cy.get("@dropdown").click();
      cy.contains("Swedish").click();
      cy.contains("Engelska").click();
    });

    it("is expected to display application name in English", () => {
      cy.get("[data-cy=header]").should("contain.text", "Yesterdays News");
    });
  });
});
