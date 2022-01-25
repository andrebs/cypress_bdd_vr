/* global Given, Then, When */

import VrPage from '../pageobjects/PraVocePage'
const vrPage = new VrPage

Given("acesso o site", () => {
    vrPage.acessarSite();
})

When("acesso a pagina de Pra Você", () => {
    vrPage.acessaAreaPraVoce();
})

And("abro o mapa em Onde usar meu cartão", () => {
    vrPage.acessaAreaPraVoceMapa();
})

Then("devo ver que o mapa é exibido com sucesso", () => {
    vrPage.validaMapa();
})