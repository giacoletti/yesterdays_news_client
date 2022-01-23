/* eslint-disable no-undef */
describe('Visitor can visit the application and', () => {
  describe('can see a list of articles', () => {
    before(() => {
      cy.intercept('GET', '**/api/articles', {
          fixture: 'articlesIndexResponse.json'
        }).as('getArticles');

      cy.visit('/');
    });

    it('is expected to make a GET request to the API', () => {
      cy.wait('@getArticles').its('request.method').should('eq', 'GET');
    });

    it('is expected to display Yesterday News Header', () => {
      cy.get('[data-cy=header').should('contain', 'Yesterdays News');
    });

    it('is expected to see a collection of articles', () => {
      cy.get('[data-cy=article-collection]')
        .children()
        .should('have.length', 20);
    });

    it('is expected to see article title', () => {
      cy.get('[data-cy=article-collection]').children().first().within(() => {
        cy.get('[data-cy=article-title]').should('contain', 'Latin News');
      });
    });

    it('is expected to see article body', () => {
      cy.get('[data-cy=article-collection]').children().first().within(() => {
        cy.get('[data-cy=article-body]').should('contain', 'Lorem ipsum');
      });
    });

    it('is expected to see article creation date', () => {
      cy.get('[data-cy=article-collection]').children().first().within(() => {
        cy.get('[data-cy=article-created]')
          .should('contain', '2022-01-13T10:24:38.354Z');
      });
    });
  });
  describe('can see an info message if no articles are available', () => {
    before(() => {
      cy.intercept('GET', '**/api/articles', {
          body: { articles: [] },
          statusCode: 401
        }).as('emptyResponse');

      cy.visit('/');
    });

    it('is expected to make a GET request to the API', () => {
      cy.wait('@emptyResponse').its('request.method').should('eq', 'GET');
    });

    it('is expected to display info message', () => {
      cy.get('[data-cy=flash-message]')
        .should(
          'contain.text',
          "We don't have articles available at the moment, please try again later."
        );
    });
  });
});
