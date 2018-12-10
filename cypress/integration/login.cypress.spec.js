describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/')
    // Click Login link
    cy.get('.navbar-nav:nth-child(2)').find('.nav-item:first').click()
  })

  after(() => {
    cy.get('.ml-auto > .nav-item > .nav-link > .fa').click()
    cy.get('.swal2-confirm').click()
  })

  it('Shows a body', () => {
    cy.get('.vue-title').contains('Login')
  })

  it('llows to login', () => {
    cy.get('.form-group:nth-child(1)').within(() => {
      cy.get('.form-label').contains('Email')
      cy.get('.form__input').type('Seller@gmail.com')
    })
    cy.get('.form-group:nth-child(2)').within(() => {
      cy.get('.form-label').contains('Password')
      cy.get('.form__input').type('123456')
    })
    cy.get('.btn').click()
    cy.get('.typo__p').contains('Login...').should('exist')
    cy.wait(1000)
    cy.get('.typo__p').contains('Login Successfully!').should('exist')
    cy.wait(1000)
    cy.url().should('include', '/cosmetic')
  })

  it('allows to login failed', () => {
    cy.get('.form-group:nth-child(1) > .form__input').type('seller@gmail.com')
    cy.get('.form-group:nth-child(2) > .form__input').type('123456')
    cy.get('.btn').click()
    cy.get('.typo__p').contains('Email or Password is Incorrectly.').should('exist')
    cy.get('.form-group:nth-child(1) > .form__input').clear().type('Seller@gmail.com')
    cy.get('.form-group:nth-child(2) > .form__input').clear().type('123')
    cy.get('.btn').click()
    cy.get('.typo__p').contains('Email or Password is Incorrectly.').should('exist')
  })

  it('Shows error messages for incomplete form fields', () => {
    cy.get('.btn').click()
    cy.get('.error').contains('Email is Required')
    cy.get('.error').contains('Password is Required')
    cy.get('.form-group:nth-child(1) > .form__input').type('Sellergmail.com')
    cy.get('.error').contains('Email format is wrong')
    cy.get('.form-group:nth-child(1) > .form__input').clear().type('Seller@gmail.com').blur()
    cy.get('.form-group:nth-child(2) > .form__input').type('123456').blur()
    cy.get('.error').should('not.exist')
  })
})
