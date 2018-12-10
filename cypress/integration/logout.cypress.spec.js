describe('Logout dialog', () => {
  beforeEach(() => {
    cy.visit('/')
    // Click Login link
    cy.get('.navbar-nav:nth-child(2)').find('.nav-item:first').click()
    cy.get('.form-group:nth-child(1) > .form__input').type('Seller@gmail.com')
    cy.get('.form-group:nth-child(2) > .form__input').type('123456')
    cy.get('.btn').click()
    cy.wait(1000)
  })

  it('Comfirm to logout', () => {
    cy.get('.ml-auto > .nav-item > .nav-link > .fa').click()
    cy.get('.swal2-confirm').click()
    cy.wait(200)
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('.ml-auto > .nav-item > .nav-link > .fa').contains('Login')
  })

  it('Cancel to logout', () => {
    cy.get('.ml-auto > .nav-item > .nav-link > .fa').click()
    cy.get('button').contains('Cancel').click()
    cy.wait(200)
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('.ml-auto > .nav-item > .nav-link > .fa').contains('Logout')
  })
})
