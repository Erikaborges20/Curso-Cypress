/// <reference types = "Cypress" />

describe(" ", () =>{
    it (" ", () => {
        cy.visit(" ")     
    })
})

/*
     Contains permite buscar un texto dentro de la página
        cy.get('span').contains('Web Tables').click()
     
     .and permite validar que se cumplan dos condiciones de manera simultánea   
        cy.get("#firstName").should("be.visible").and("be.enabled").type("Ramona")

*/