//cypress - Spec file/ test file
describe('My Third Test', function()
{
    it('My Third TestCase', function()
    {
        //test steps
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => 
        {
            const text = $el.text()
            if (text.includes("Python"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const textPrice = price.text()
                    expect(textPrice).to.equal('25')
                })
            }
        })

    })

})