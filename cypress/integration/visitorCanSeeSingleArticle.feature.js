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

  it("is expected to see article body", () => {
    cy.get("[data-cy=article-body]").should(
      "contain",
      "Often people, especially computer engineers, focus on the machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines."
    );
  });

  it("is expected to see article published date", () => {
    cy.get("[data-cy=article-created]").should(
      "contain",
      "January 28, 2022 12:31"
    );
  });

  it("is expected to see article author", () => {
    cy.get("[data-cy=article-author]").should("contain", "Fr. Eden Nitzsche");
  });
});
