//cypress - Spec file/ test file
describe('My Second Test', function()
{
    it('My Second TestCase', function()
    {
        //test steps
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //allias concept
        /* cy.get('.products').as('productsLocator') => now we can use @productsLocator in place of .products*/
        //parent child chaining
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        //itteriting through list
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }

        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })

})