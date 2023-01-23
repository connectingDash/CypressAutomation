//cypress - Spec file/ test file
describe('My Third Test', function()
{
    it('My Third TestCase', function()
    {
        //test steps
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Method_1
        /*cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')*/

        //Method_2
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

    })

})