/// <reference types = "Cypress" />

describe("Primer ", () =>{
    it.only ("Crear nuevo usuario ", () => {
        cy.visit("https://demoqa.com")
        cy.title().should('eq', 'DEMOQA')
        cy.get(".category-cards > :first-child").click()
        cy.get('span').contains('Web Tables').click()
        cy.get("#addNewRecordButton").click()
        cy.get(".modal-body").should("be.visible")
        cy.get("#firstName").should("be.visible").and("be.enabled").type("Ramona")
        cy.get("#lastName").should("be.visible").and("be.enabled").type("Posa")
        cy.get('#userEmail').should("be.visible").and("be.enabled").type("Ramona.posey@yopmail.com")
        cy.get("#age").should("be.visible").type("12")
        cy.get("#salary").should("be.visible").type("4300")
        cy.get("#department").should("be.visible").type("Finanzas")

    })

    it ("Editar usuario creado ", () => {
        cy.visit(" ")     
    })

    it ("Eliminar usuario creado", () => {
        cy.visit(" ")     
    })
})