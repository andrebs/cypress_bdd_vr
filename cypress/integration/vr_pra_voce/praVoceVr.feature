Feature: Pra Você

    Scenario: Visualizar opção de recuperar senha esquecida
        Given acesso o site
        When acesso a pagina de Pra Você
        And abro o mapa em Onde usar meu cartão
        Then devo ver que o mapa é exibido com sucesso
