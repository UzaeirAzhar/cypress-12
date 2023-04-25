import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import visit_page from '@page/visit.js'
import * as page from '@page/atu-example.js'

const visit = new visit_page()

When('I visit duckduckgo.com', () => {
  visit.page()
})

When('I visit ATU shop page', () => {
  page.page_visit()
})

Then('I should see a search bar', () => {
  visit.page_assert()
})

Then('I get some title', () => {
  let array = []
  let test_array = ['private search', 'tracker blocking', 'site encryption']
  array = visit.page_get_title()
  cy.wrap(array).then(() => {
    expect(array).not.to.be.undefined
    expect(array).to.be.an('array')
    expect(array).to.deep.eq(test_array)
    expect(array).to.be.an.instanceOf(Array)
  })
})
