*** Settings ***
Resource                  ${EXECDIR}/tests/resources/base.robot

Test Setup                Open Session
Test Teardown             Close Session

*** Test Cases ***
Login com sucesso
    Dado que eu acesse o portal das startups
    E insira os dados de login
    Quando eu clicar em entrar
    Então eu devo ver a mensagem de boas vindas