describe("Home page", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows a header", () => {
    cy.get(".vue-title").should('contain','Homer for President !!');
    //cy.get(".lead").should('contain','Time for a change !!');
    cy.get(".lead").contains('Time for a change !!');
  });

  describe("Navigation bar", () => {
      it("Shows the required links", () => {
        //cy.get(".navbar").find('[data-test=donatebtn]' );
        cy.get(".navbar").contains('Home' );
		cy.get(".navbar-brand").contains('Cosmetics Web App' );
        cy.get('.navbar-nav:nth-child(1)').within(() => {
          cy.get('.nav-item:first').should('contain', 'Home')
          cy.get('.nav-item:nth-child(2)').should('contain', 'Manage Cosmetics')
          cy.get('.nav-item:nth-child(3)').should('contain', 'Donate')
          cy.get('.nav-item:nth-child(4)').should('contain', 'Map')
        })
        cy.get('.navbar-nav:nth-child(2)').within(() => {
          cy.get('.nav-item:first').should('contain', 'About Us')
          cy.get('.nav-item:nth-child(2)').should('contain', 'Register')
		  cy.get('.nav-item:nth-child(3)').should('contain', 'Login')
		  cy.get('.nav-item:nth-child(4)').should('contain', 'Logout')
        })
      });

      it("Redirects when links are clicked", () => {
        //cy.get('[data-test=donatebtn]').click();
        //cy.url().should('include','/donate' )
        cy.get(".navbar").contains('Manage Cosmetics' ).click();
        cy.url().should('include','/cosmetics' )
        // etc
      });
    })
});
