/// <reference types = "Cypress" />

describe("Segundo Reto", () =>{
    it ("Crear un elemento", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq', 'Computers database') 
        cy.get('#add').should('be.visible').click()
        cy.get("#main").contains("Add a computer")
        cy.get('#name').should('be.visible').and('be.enabled').type('ASUS')
        cy.get('#introduced').should('be.visible').and('be.enabled').type('1992-12-22')
        cy.get('#discontinued').should('be.visible').and('be.enabled').type('2002-12-22')
        cy.get('select').select('ASUS').should('have.value', '36')
        cy.get('[type="submit"]').should('be.visible').click()
        cy.get('.alert-message').contains("Computer ASUS has been created") 
    })

    it ("Filtrar elementos", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.get('#searchbox').should('be.visible').and('be.enabled').type('ACE')
        cy.get('#searchsubmit').should('be.visible').and('be.enabled').click()
        cy.get('#main').contains("computers found")
        
    })

    it.only ("Eliminar un elemento", () => {
        cy.visit("https://computer-database.gatling.io/computers") 
        cy.get('[href="/computers/355"]').should('be.visible').click()
        cy.get(' [value="Delete this computer"]').should('be.visible').click({force: true})
        cy.get('.alert-message').contains("Computer ARRA has been deleted")        
    })
})