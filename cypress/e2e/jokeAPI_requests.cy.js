/// <reference types="cypress" />

context('JokeAPI Requests', () => {
  beforeEach(() => {
    cy.visit('https://v2.jokeapi.dev/')
  })

  // Manage HTTP requests in your app

  it('GET action in JokeAPI', () => {
    // https://on.cypress.io/request
    cy.request('https://jsonplaceholder.cypress.io/comments')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })

})
