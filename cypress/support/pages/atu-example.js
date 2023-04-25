export function page_visit () {
  cy.visit('/shop', { failOnStatusCode: false })
}
