/// <reference types="Cypress" />
describe('orageHRM TestSuite', function(){

     it('Verify URL', function(){

       
        cy.visit("/")
        

        cy.url().should("include", "orangehrmlive")

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        


     })
      

    it('Verify title', function(){

        cy.visit("/")

        cy.title().should('include', 'HRM')
        
        cy.title().should('eq', 'OrangeHRM')
        
     })


    it("login to application", function() {

        cy.visit("/")

        cy.get("input[placeholder='Username']").type("admin").should("have.value", "admin")

        cy.get("input[placeholder='Password']").type("admin123").should("have.value", "admin123")

        cy.get("button[type='submit']").click()

    })


    it("Invalid credentials", function() {

        cy.visit("/")

        cy.get("input[placeholder='Username']").type("admin").should("have.value", "admin")

        cy.get("input[placeholder='Password']").type("admin123123")

        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", "Invalid credentials")

    })



})