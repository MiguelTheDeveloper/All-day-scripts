// ==UserScript==
// @name         Login Fcul Button
// @namespace    http://tampermonkey.net/
// @version      2024-12-02
// @description  try to take over the world!
// @author       You
// @match        https://moodle.ciencias.ulisboa.pt/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ulisboa.pt
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


        // Esperar a página carregar completamente
        window.addEventListener('load', function() {
            // Criar o botão de login
            var loginButton = document.createElement('button');
            loginButton.textContent = 'Login';
            loginButton.style.padding = '5px 10px';
            loginButton.style.backgroundColor = '#FFFFF';
            loginButton.style.color = '#00000';
            loginButton.style.border = 'none';
            loginButton.style.borderRadius = '5px';
            loginButton.style.cursor = 'pointer';

            // Adicionar o botão à navbar
            var navbar = document.querySelector('nav'); // Aqui você pode ajustar o seletor conforme a estrutura da sua página
            if (navbar) {
                navbar.appendChild(loginButton);
            } else {
                console.error('Navbar não encontrada.');
            }

            // Definir a ação do botão, redirecionando para a página de login (se necessário)
            loginButton.addEventListener('click', function() {
                window.location.href = '/login'; // Redireciona para a página de login
            });
        });

    // Your code here...
})();