*** Settings ***
Resource                  ${EXECDIR}/tests/resources/keywords.robot

Documentation             Esta é uma suite de testes para o projeto da disciplina de Metodologias Ágeis de Desenvolvimento de Software. 

#General functions only
*** Keywords ***
Open Session
    Open Browser          about:blank        chrome

Close Session
    Close All Browsers