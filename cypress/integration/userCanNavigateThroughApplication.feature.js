describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("to Home tab", () => {
    beforeEach(() => {
      cy.get("#home-tab").click();
    });

    it("displays Yesterday News Header", () => {
      cy.get("#home-header").should("contain", "Yesterdays News");
    });

    it("Display Hello world", () => {
      cy.get("#hello").should("contain", "Hello world");
    });
  });

  describe("to Economy tab", () => {
    beforeEach(() => {
      cy.get("#economy-tab").click();
    });

    it("display My Economy header", () => {
      cy.get("#economy-header").should("contain", "My Economy");
    });

    it("displays comment name in url", () => {
      cy.url().should("contain", "economy");
    });
    
    it("Display Hello world", () => {
      cy.get("#hello").should("contain", "Hello world");
    });
  });

});