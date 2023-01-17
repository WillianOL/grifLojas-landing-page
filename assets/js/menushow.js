let BotaoMenu = document.getElementById('BtnMenu')
BotaoMenu.addEventListener('click', AbrirMenu)

//Função simples de abertura e fechamento do menu mobile.
function AbrirMenu(){
    let Menu = document.getElementById('NavMenu')
    Menu.classList.toggle('MenuMobile')
}


