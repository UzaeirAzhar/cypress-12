'use-strict'

class visit {
  page () {
    cy.visit('https://duckduckgo.com')
  }

  assert () {
    cy.get('#search_form_input_homepage').should(
      'have.attr',
      'placeholder',
      'Search the web without being tracked'
    )
    assert.deepEqual({}, {})
  }

  page_assert () {
    cy.get('#search_form_input_homepage').should(
      'have.attr',
      'placeholder',
      'Search the web without being tracked'
    )
    assert.deepEqual({}, {})
  }
  page_get_title () {
    let array_list = []
    //cy.log('Starts')
    cy.get('li.badge-link__bullet  > span').each($ele => {
      array_list.push($ele.text().trim())
    })
    return array_list
  }
}

export default visit
