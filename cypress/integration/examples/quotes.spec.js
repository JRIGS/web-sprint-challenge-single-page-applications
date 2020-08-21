// import cy from "cypress"

describe('Pizza App', () => {

  
    //   beforeEach(() => {
    //       //automate cleanup
    //   })

  
    // describe('Can click Create a pizza', () => {
    //   it('can navigate to http://localhost:3000', () => {
    //     cy.visit('http://localhost:3000')
    //     cy.url().should('include', 'localhost')
    //   })
    // })
    
    // it('can submit a new pizza', () => {
      
    //     cy.get('#pizzaForm').click()
    //   })
    
    describe('Can create new Pizza w/ Inputs, Dropdown, Checkboxes submit button cancel button', () => {

          it('can navigate to http://localhost:3000/', () => {
            cy.visit('http://localhost:3000/')
            cy.url().should('include', 'localhost')
          })

          it('can click the button to order a new pizza and navigate to /pizza form', () => {
            cy.get('#pizzaForm').click()
          })
        
          it('the add to order is disabled', () => {
            cy.get('#submitBtn').should('be.disabled')
          })

        it('can type something in the "name" input', () => {
            cy.get('input[name="name"]')
              .type('Jonathan')
              .should('have.value', 'Jonathan')
          })

          it('can select from dropdown', () => {
            cy.get('select[name="size"]').select('large')
              .should('have.value', 'large')
          })

          it('can toggle sauces', () => {
            cy.get('[type="radio"]').check()
    
          })

          it('can toggle toppings', () => {
            cy.get('[type="checkbox"]').check()
    
          })

          it('can type something in the "special instructions" input', () => {
            cy.get('input[name="specialOrder"]')
              .type('Anything you want')
              .should('have.value', 'Anything you want')
          })

          it('the add to order is enabled', () => {
            cy.get('#submitBtn').should('be.enabled')
          })

          it('can confirm a new pizza', () => {
      
            cy.get('#submitBtn').click()
             cy.reload()
        })
        
    })

    describe('Can check if there is missing info', () => {
        it('can navigate to http://localhost:3000/pizza', () => {
        cy.visit('http://localhost:3000/pizza')
      })

      it('can show errors', () => {
          cy.get('input[name="name"]')
          .type('Jonathan Raczkowski')
          cy.get(".errors").should('be.visible')
          cy.reload()
      })
      
    })
          describe('Can navigate back home', () => {
              it('can navigate to http://localhost:3000/pizza', () => {
                cy.visit('http://localhost:3000/pizza')
                cy.url().should('include', 'localhost')
              })
    
              it('navigate back to home', () => {
                cy.get('#homeBtn').click()
              })
        
    })

      
})