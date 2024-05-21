describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[name="q"]').type('moletom')

    cy.get('form').submit()

    cy.wait(1000)

    cy.get('input[name="q"]').clear().type('camis')

    cy.get('form').submit()

    cy.wait(1000)

    cy.get('input[name="q"]').clear().type('never')

    cy.get('form').submit()

    cy.wait(1000)

    cy.get('input[name="q"]').clear().type('ai')

    cy.get('form').submit()
  })
})
