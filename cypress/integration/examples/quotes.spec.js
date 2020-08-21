// import cy from "cypress"

describe('Pizza App', () => {

  
    //   beforeEach(() => {
    //       //automate cleanup
    //   })
  
    // describe('Can click Create a pizza', () => {
    //   it('can navigate to http://localhost:3000/pizza', () => {
    //     cy.visit('http://localhost:3000/pizza')
    //     cy.url().should('include', 'localhost')
    //   })
    // })
    
    // it('can submit a new pizza', () => {
      
    //     cy.get('[name=pizzaForm]').click()
    //   })
    
    describe('Inputs, submit button cancel button', () => {

          it('can navigate to http://localhost:3000/pizza', () => {
            cy.visit('http://localhost:3000/pizza')
            cy.url().should('include', 'localhost')
          })
        })

        it('can type something in the "name" input', () => {
            cy.get('input[name="name"]')
              .type('Jonathan')
            //   .should('have.value', 'Jonathan')
          })
       
})