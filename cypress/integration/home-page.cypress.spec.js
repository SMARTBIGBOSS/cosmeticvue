describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'Cosmetic Home')
    // cy.get(".lead").should('contain','Time to View !!');
    cy.get('.lead').contains('Time to View !!')
  })

  it('Shows a body', () => {
    cy.get('tr > :nth-child(1)').contains('here')
    cy.get(':nth-child(3) > a').should('have.attr', 'href', '/login')
  })

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar').contains('Home')
      cy.get('.navbar-brand').contains('Cosmetics Web App')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Manage Cosmetics')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Login')
      })
    })
  })
})
