document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); //variável comportamento _shows
    const questions = document.querySelectorAll('[data-faq-question]'); //variável comportamento _faq
    const heroSection = document.querySelector('.hero'); //variável comportamento _header
    const heightHero =  heroSection.clientHeight; //variável comportamento _header (captura a altura da seção)

    window.addEventListener('scroll', function () {
        const positionNow = window.scrollY;

        if (positionNow < heightHero) {
            hidenHeaderElements();
        } else {
            showHeaderElements();
        }
    })
    // itera sobre os botões do _shows, adicionando a classe que ativa a formatação dos botões
    // e exibindo o conteúdo respectivo a aba selecionada
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const setTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${setTab}]`);
            //remove todas as classes ativas
            hideAllTabs(); 
            removeButtonAttribute();
            //adiciona a classe ativa ao elemento selecionado
            tab.classList.add('shows__list--is-active');
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrClose);
    }
})

function hidenHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hiden');
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hiden');
}

function openOrClose(element) {
    const classe ='faq__questions__item--is-open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(classe)

}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeButtonAttribute() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}