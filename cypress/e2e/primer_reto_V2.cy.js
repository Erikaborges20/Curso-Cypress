/// <reference types = "Cypress" />
function randomEmail() {
    let n = (Math.floor(Math.random() * 100000))
    let emailX = `santiago${n}@example.com`
    return emailX
}

const email = randomEmail()

describe("Primer ", () =>{
    it ("Crear nuevo usuario ", () => {
        cy.visit('https://opencart.abstracta.us/index.php?route=account/register')
        cy.title().should('eq', 'Register Account')
        cy.get('#input-firstname').should("be.visible").and("be.enabled").type('Santiago')
        cy.get('#input-lastname').should("be.visible").and("be.enabled").type('Vina')
        cy.get('#input-email').should("be.visible").and("be.enabled").type(email)
        cy.get('#input-telephone').should("be.visible").and("be.enabled").type('+56982716252')
        cy.get('#input-password').should("be.visible").and("be.enabled").type('1234')
        cy.get('#input-confirm').should("be.visible").and("be.enabled").type('1234')
        cy.get('[type="checkbox"]').click()
        cy.get('input[value="Continue"]').should("be.visible").and("be.enabled").click('right')
        cy.get("#content").contains("Congratulations! Your new account has been successfully created!")
        
        

    })

    it ("Acceder con usuario creado ", () => {
        cy.visit("https://opencart.abstracta.us/index.php?route=account/login")
        cy.get('#input-email').should("be.visible").and("be.enabled").type(email)
        cy.get('#input-password').should("be.visible").and("be.enabled").type('1234')
        cy.get('[type="submit"]').should("be.visible").and("be.enabled").click()
        cy.get("#content > h2:nth-child(1)").contains("My Account")


    })

    // it ("Eliminar usuario creado", () => {
    //     cy.visit(" ")     
    // })
})