/* eslint-disable no-undef */
describe("A user visiting the application can display articles by categories", () => {
  before(() => {
    cy.intercept("GET", "/api/articles", {
      fixture: "articlesIndexResponse.json",
    });
    cy.visit("/");
  });

  describe('can switch to "Politics" view', () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "politicsArticlesResponse.json",
      }).as("politicsArticles");
      cy.get("[data-cy=politics-view]").click();
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@politicsArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to see a collection of articles", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .should("have.length", 20);
    });

    it("is expected to see politics article title", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-title]")
            .should("contain.text", "Putin and Trump")
            .and("be.visible");
        });
    });

    it("is expected to see politics article body", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-body]")
            .should("contain.text", "Shocking news, USA and Russia are...")
            .and("be.visible");
        });
    });

    it("is expected to see politics article creation date", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-created]")
            .should("contain.text", "2022-01-13T10:24:38.354Z")
            .and("be.visible");
        });
    });
  });

  describe('can switch to "Sports" view', () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "sportsArticlesResponse.json",
      }).as("sportsArticles");
      cy.get("[data-cy=sports-view]").click();
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@sportsArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to see sports article title", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-title]")
            .should("contain.text", "Ronaldo and Messi")
            .and("be.visible");
        });
    });

    it("is expected to see sports article body", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-body]")
            .should("contain.text", "Champions of whatever")
            .and("be.visible");
        });
    });

    it("is expected to see sports article creation date", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-created]")
            .should("contain.text", "2021-12-13T10:24:38.354Z")
            .and("be.visible");
        });
    });
  });

  describe('can switch to "Economy" view', () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "economyArticlesResponse.json",
      }).as("economyArticles");
      cy.get("[data-cy=economy-view]").click();
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@economyArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to see economy article title", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-title]")
            .should("contain.text", "Biggest financial crisis ever")
            .and("be.visible");
        });
    });

    it("is expected to see economy article body", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-body]")
            .should("contain.text", "Tips and trics how not to become poor")
            .and("be.visible");
        });
    });

    it("is expected to see economy article creation date", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-created]")
            .should("contain.text", "2021-12-10T10:24:38.354Z")
            .and("be.visible");
        });
    });
  });

  describe('can switch back to "Main" view', () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "economyArticlesResponse.json",
      });
      cy.intercept("GET", "/api/articles", {
        fixture: "articlesIndexResponse.json",
      }).as("getArticles");
      cy.get("[data-cy=economy-view]").click();
      cy.get("[data-cy=header]").click();
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@getArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to see article title", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-title]").should("contain", "Latin News");
        });
    });

    it("is expected to see article body", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-body]").should("contain", "Lorem ipsum");
        });
    });

    it("is expected to see article creation date", () => {
      cy.get("[data-cy=article-collection]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-created]").should(
            "contain",
            "2022-01-13T10:24:38.354Z"
          );
        });
    });
  });
});