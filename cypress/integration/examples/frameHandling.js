/// <reference types= "Cypress" />
/// <reference types= "cypress-iframe" />
import 'cypress-iframe'

describe('Frame Test', function(){
    it('FirstTest', function(){
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('courses-iframe')
        cy.iframe().find("a[href*='learning-path']").eq(0).click()
    })
    
})