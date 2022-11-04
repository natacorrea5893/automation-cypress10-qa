/// <reference types="cypress" />


context('JokeAPI Requests', () => {
  beforeEach(() => {
    cy.visit('https://v2.jokeapi.dev/')
  })

  // Manage HTTP requests in your app

  it('GET Any joke in JokeAPI', {tags: ['@service', '@JokeAPI']}, () => {
    // https://on.cypress.io/request
    cy.request('https://v2.jokeapi.dev/joke/Any?lang=es')
      .should((response) => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response))
        cy.writeFile('cypress/fixtures/anyJoke.json', response.body)
      })
  })

  it('GET Programming joke in JokeAPI', {tags: ['@service', '@JokeAPI']}, () => {
    // https://on.cypress.io/request
    cy.request('https://v2.jokeapi.dev/joke/Programming?lang=es')
      .should((response) => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response))
        cy.writeFile('cypress/fixtures/programmingJoke.json', response.body)
      })
  })

})
