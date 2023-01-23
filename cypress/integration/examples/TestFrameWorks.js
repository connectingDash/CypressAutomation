/// <reference types='Cypress' />
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"
import CheckOutPage from "../pageObjects/CheckOutPage"

describe('My First Test Suite', function(){

    before(function(){
        //runs once before all the test cases in the block
        cy.fixture('example').then(function(data){
            this.data = data
        })

    })

    it('My First Function', function(){
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkOutpage = new CheckOutPage()

        cy.visit(Cypress.env('url')+'/angularpractice/')
        //cy.get(':nth-child(1) > .form-control').type('Rishu')
        homePage.getNameBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getNameBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(function(product){
            cy.selectProduct(product)
        })

        productPage.getCheckout().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => 
        {
            const amount = $el.text()
            var splitAmount = amount.split(" ")
            splitAmount = splitAmount[1].trim()
            sum = Number(sum) + Number(splitAmount)
        }).then(function(){
            cy.log(sum)
        })
        cy.get('td h3 strong').then(function(totalSum){
            const finalAmount = totalSum.text()
            var amountToBePaid = finalAmount.split(" ")
            var amountToBePaid = amountToBePaid[1].trim()
            expect(Number(amountToBePaid)).to.equal(sum)
        })

        checkOutpage.getFinalheckout().click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(text)
        {
            const actualText = text.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })
})