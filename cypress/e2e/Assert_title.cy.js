/// <reference types = "Cypress" />

describe("Validar elementos en la página ", () =>{
    it ("Validar nombre del título ", () => {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq', 'DEMOQA')     
    })
})