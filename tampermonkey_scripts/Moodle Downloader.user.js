// ==UserScript==
// @name         Moodle Downloader
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Botão de download direto para ficheiros no Moodle FCUL (sem novo separador, sem fetch, confiando no browser para redirecionar e descarregar o ficheiro automaticamente com a sessão atual). Simples e compatível com Content-Disposition headers do servidor Moodle.
// @author       Neural
// @match        https://moodle.ciencias.ulisboa.pt/*
// @grant        none
// @icon         https://www.brainline.org/sites/all/modules/custom/bl_brain/images/brain-lateral.png
// ==/UserScript==

(function () {
    'use strict';

    function createDownloadButton(viewUrl) {
        const btn = document.createElement('button');
        btn.textContent = '⬇️';
        btn.title = 'Download direto (sem novo separador)';
        btn.className = 'moodle-download-btn';
        Object.assign(btn.style, {
            marginLeft: '10px',
            cursor: 'pointer',
            fontSize: '14px',
            border: '1px solid #007bff',
            backgroundColor: '#e9f5ff',
            color: '#007bff',
            borderRadius: '4px',
            padding: '2px 6px'
        });

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const a = document.createElement('a');
            a.href = viewUrl;
            a.download = ''; // deixa o browser tentar usar o nome original
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });

        return btn;
    }

    function processFicheiros() {
        const activities = document.querySelectorAll('div.activity-item[data-activityname]');

        activities.forEach(activity => {
            const link = activity.querySelector('.activityname a');
            if (!link || !link.href.includes('/mod/resource/view.php?id=')) return;

            if (activity.querySelector('.moodle-download-btn')) return;

            const btn = createDownloadButton(link.href);

            const container = activity.querySelector('.activity-name-area');
            if (container && container.parentElement) {
                const wrapper = document.createElement('div');
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.appendChild(btn);
                container.parentElement.insertBefore(wrapper, container.nextSibling);
            }
        });
    }

    window.addEventListener('load', () => {
        processFicheiros();

        const observer = new MutationObserver(() => {
            processFicheiros();
        });

        observer.observe(document.body, { childList: true, subtree: true });
    });
})();
