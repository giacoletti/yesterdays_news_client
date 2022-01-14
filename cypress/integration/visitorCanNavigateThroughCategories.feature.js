describe('A user visiting the application can display articles by categories', () => {
  before(() => {
    cy.visit('/');
  });

  describe('can switch to "Politics" view', () => {
    before(() => {
      cy.intercept('GET', '**/api/articles', {
          fixture: 'politicsArticlesResponse.json'
        }).as('politicsArticles');
      cy.get('[data-cy=politics-view]').click();
    });

    it('is expected to make a GET request to the API', () => {
      cy.wait('@getArticles').its('request.method').should('eq', 'GET');
    });

    it('is expected to see a collection of articles', () => {
      cy.get('[data-cy=article-collection]')
        .children()
        .should('have.length', 20);
    });

    it('is expected to see politics article title', () => {
      cy.get('[data-cy=article-collection]').children().first().within(() => {
        cy.get('[data-cy=article-title]')
          .should('contain.text', 'Putin and Trump')
          .and('be.visible');
      });
    });

    it('is expected to see politics article body', () => {
      cy.get('[data-cy=article-collection]').children().first().within(() => {
        cy.get('[data-cy=article-body]')
          .should('contain.text', 'Shocking news, USA and Russia are...')
          .and('be.visible');
      });
    });

    it('is expected to see politics article creation date', () => {
      cy.get('[data-cy=article-created]').children().first().within(() => {
        cy.get('[data-cy=article-body]')
          .should('contain.text', '2022-01-13T10:24:38.354Z')
          .and('be.visible');
      });
    });
  });
});
