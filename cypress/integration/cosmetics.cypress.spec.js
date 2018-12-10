describe('Manage Cosmetics page', () => {
  beforeEach(() => {
    // Delete all donations in the API's datastore
    cy.request('http://localhost:3000/cosmetics')
      .its('body')
      .then((cosmetics) => {
        cosmetics.forEach((element) => {
          cy.request('DELETE', 'http://localhost:3000/cosmetics/' + element.cosmeticId + '/delete')
        })
      })
    // Populate API's datastore
    cy.fixture('cosmetics')
      .then((cosmetics) => {
        cosmetics.forEach((cosmetic) => {
          cy.request('POST',
            'http://localhost:3000/cosmetic/add/', cosmetic)
        })
      })
    cy.visit('/')
    // Click Manage Cosmetics navbar link
    cy.get('.navbar-nav:nth-child(2)').find('.nav-item:first').click()
    cy.get('.form-group:nth-child(1) > .form__input').type('Seller@gmail.com')
    cy.get('.form-group:nth-child(2) > .form__input').type('123456')
    cy.get('.btn').click()
    cy.wait(2000)
  })

  afterEach(() => {
    // Click Logout navbar link
    cy.get('.ml-auto > .nav-item > .nav-link > .fa').click()
    cy.get('.swal2-confirm').click()
  })

  it('Shows a body', () => {
    cy.get('#sortPrice > :nth-child(1)').contains('Sort by High Price')
    cy.get('#sortPrice > :nth-child(2)').contains('Sort by Low Price')
    cy.get('.VueTables__name-filter-wrapper > .form-control').should('be.visible')
    cy.get('.VueTables__brand-filter-wrapper > .form-control').should('be.visible')
    cy.wait(200)
    // Sort cosmetics by price
    cy.get('#sortPrice > :nth-child(1)').click()
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('1004')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('1003')
    cy.get('#sortPrice > :nth-child(2)').click()
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('1003')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('1004')
    // // Fill the filter
    cy.get('.VueTables__name-filter-wrapper > .form-control').type(3)
    cy.wait(200)
    cy.get('tbody > tr > :nth-child(2)').contains('1003')
    cy.get('.VueTables__brand-filter-wrapper > .form-control').type(3)
    cy.wait(200)
    cy.get('.VueTables__no-results > .text-center').contains('No matching records')
  })

  it('Edits a cosmetic', () => {
    cy.get(':nth-child(2) > :nth-child(8) > .fa').click()
    cy.url().should('include', '/edit')
    cy.get(':nth-child(1) > .form__input').type('1001')
    cy.get(':nth-child(2) > .form__input').type('Cometic1')
    cy.get(':nth-child(3) > .form__input').type('MyBrand')
    cy.get(':nth-child(4) > .form__input').type(20)
    cy.get(':nth-child(5) > .form__input').type('2000')
    cy.wait(100)
    cy.get(':nth-child(6) > .btn').click()
    cy.get('.typo__p').contains('Add a Cosmetic Successfully!')
    cy.wait(1500)
  })

  it('Shows error messages for incomplete form fields ', () => {
    cy.get(':nth-child(1) > :nth-child(8) > .fa').click()
    cy.url().should('include', '/edit')
    cy.get('.btn').click()
    cy.get('.error').contains('Cosmetic ID is Required')
    cy.get('.error').contains('Name is Required')
    cy.get('.error').contains('Brand is Required')
    cy.get('.error').contains('Price is Required')
    cy.get('.error').contains('Publisher is Required')
    cy.get(':nth-child(3) > .form__input').type('Cometic111111111111111111111').blur()
    cy.get('.error').contains('Name must have at most 20 letters.')
    cy.get(':nth-child(7) > .form__input').type(200000)
    cy.get('.error').contains('Price must be between 0 and 10000')
    cy.get(':nth-child(1) > .form__input').type('1001')
    cy.get(':nth-child(2) > .form__input').clear().type('Cometic1').blur()
    cy.get(':nth-child(3) > .form__input').type('MyBrand')
    cy.get(':nth-child(4) > .form__input').clear().type(20).blur()
    cy.get(':nth-child(5) > .form__input').type('2000')
    cy.get('.error').should('not.exist')
    cy.get(':nth-child(6) > .btn').click()
  })

  it('Allows a cosmetic to be deleted', () => {
    // Click trash/delete link of 1st cosmetic in list
    cy.get(':nth-child(1) > :nth-child(9) > .fa').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.wait(500)
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('tbody').find('tr').should('have.length', 1)
  })

  it('Reject a cosmetic to be deleted', () => {
    // Click trash/delete link of 1st cosmetic in list
    cy.get(':nth-child(1) > :nth-child(9) > .fa').click()
    // Click cancel button
    cy.get('button').contains('Cancel').click()
    cy.wait(500)
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('tbody').find('tr').should('have.length', 2)
  })
})
