describe('Manage Cosmetics page', () => {
  let cosmetic = {
    'cosmeticId': '1001',
    'name': 'Test Cosmetic_1',
    'brand': 'Test Brand',
    'price': 5.00,
    'publisher': '2000',
    'release_date': Date.now()
  }

  beforeEach(() => {
    cy.visit('/')
    // Click Manage Cosmetics navbar link
    cy.get('.nav-item:nth-child(2)').click()
    cy.get('.form-group:nth-child(1) > .form__input').type('Seller@gmail.com')
    cy.get('.form-group:nth-child(2) > .form__input').type('123456')
    cy.get('.btn').click()
    // Delete all donations in the API's datastore
    cy.request('https://localhost:3000/cosmetics')
      .its('body')
      .then((cosmetics) => {
        cosmetics.forEach((element) => {
          cy.request('DELETE',
            'https://localhost:3000/' + element._id + '/delete')
        })
      })
  })
  it('Shows a body', () => {
    cy.get('.vue-title').contains('Login')
  })

  it('shows cosmetics list', () => {
    cy.get('')
  })
/*
    it("shows and hides a donation's message", () => {
        // Click + symbol of 2nd donation in list
        cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click();
        cy.get('div.vue-message', {timeout: 5000}).should('contain', 'The message is [ Hope this helps')
        // Unclick same + symbol
        cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click();
        cy.get('div.vue-message').should('not.exist')
    });
*/
})
