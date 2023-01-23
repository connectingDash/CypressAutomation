//cypress - Spec file/ test file
describe('My Third Test', function()
{
    it('My Third TestCase', function()
    {
        //test steps
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //window:alert
        cy.on('window:alert',(str) => 
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => 
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Child Tab Concept in Cypress
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(4000)
        cy.go('back')

    })

})