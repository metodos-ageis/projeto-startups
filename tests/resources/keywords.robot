*** Settings ***
Library                            SeleniumLibrary    run_on_failure=Capture Page Screenshot

*** Variables ***
${URL_BASE}                        http://localhost:8080  # URL of the application

*** Keywords ***

Dado que eu acesse o portal das startups
    Go to                          ${URL_BASE}
    Wait until page contains       Login

E insira os dados de login
    Element Should Be Visible      id=username
    Input text                     id=username    admin
    Element Should Be Visible      id=password
    Input text                     id=password    admin

Quando eu clicar em entrar
    Click Button                   id=login

Então eu devo ver a mensagem de boas vindas
    Wait until page contains       Bem vindo
