//cypress - Spec file/ test file
describe('My First Test', function()
{
    it('My First TestCase', function()
    {
        //test steps
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        //allias concept
        /* cy.get('.products').as('productsLocator') => now we can use @productsLocator in place of .products*/
        //parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('Abhishek')
        })

        //itteriting through list
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }

        })

        //assert if logo text is correctly printed
        cy.get('.brand').should('have.text', 'GREENKART')
        //this is to print title in logs
        cy.get('.brand.greenLogo').then(function(logoTitle)
        {
            cy.log(logoTitle.text())
        })
    })

})