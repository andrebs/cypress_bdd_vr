/// <reference types="Cypress" />

import VrElements from '../elements/PraVoceElements'
const vrElements = new VrElements
const url = Cypress.config("baseUrl")

class PraVocePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    acessaAreaPraVoce(){
        cy.get (vrElements.menuPrincipal)
        .contains('Pra Você')
        .click()
    }

    acessaAreaPraVoceMapa(){
        cy.get(vrElements.buttonsMapaApp)
        .contains('Onde usar meu cartão VR?')
        .click()
    }

    validaMapa(){
        cy.get('#mapSection')
        .should('be.visible')
        cy.get('#map')
        .should('be.visible')
    }
}

export default PraVocePage;