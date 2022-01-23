/* eslint-disable no-undef */
describe("Visitor can see a single article", () => {
  before(() => {
    cy.intercept("GET", "**/api/articles", {
      fixture: "articlesIndexResponse.json",
    }).as("getArticles");
    cy.intercept("GET", "**/api/articles/**", {
      fixture: "articleShowResponse.json",
    }).as("getArticle");
    cy.visit("/");
    cy.get("[data-cy=article-collection]").children().first().click();
  });

  it("is expected to make a GET request to the API", () => {
    cy.wait("@getArticle").its("request.method").should("eq", "GET");
  });

  it("is expected to display correct url", () => {
    cy.url().should("contain", "1");
  });

  it("is expected to see article title", () => {
    cy.get("[data-cy=article-title]").should("contain", "The Grapes of Wrath");
  });

  it("is expected to see article published date", () => {
    cy.get("[data-cy=article-created]").should("contain", "2022-01-23");
  });
});
