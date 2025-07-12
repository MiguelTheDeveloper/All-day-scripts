// ==UserScript==
// @name         Clique Automático - Utilizadores Ciências
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Clica automaticamente no botão "Utilizadores Ciências" na página de login do Moodle Ciências ULisboa
// @match        https://moodle.ciencias.ulisboa.pt/login/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Esperar o DOM estar carregado e o botão visível
    const interval = setInterval(() => {
        const button = document.querySelector('a[href*="authCAS=CAS"] button');
        if (button && button.textContent.includes("Utilizadores Ciências")) {
            console.log("Botão 'Utilizadores Ciências' encontrado. Clicando...");
            button.click();
            clearInterval(interval); // Parar a verificação após clicar
        }
    }, 300); // Verifica a cada 300ms
})();
