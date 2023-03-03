/// <reference types = "Cypress" />

describe("Primer hola mundo en cypres", () =>{
    it ("Mejor hacemos algo más interesante", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.wait(3000)

        cy.get("#wsf-1-field-21").type("Cump")
        cy.get("#wsf-1-field-22").type("Iker")
        cy.get("#wsf-1-field-23").type("Cump@yopmail.com")
        cy.get("#wsf-1-field-24").type("1893628643843")
        cy.get("#wsf-1-field-28").type("St. Jhoasdgqndte")
        cy.get("#wsf-1-field-27").click()
        
    })
})