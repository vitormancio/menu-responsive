const menu = document.querySelector('#hamburguer')

const toogleClass = () => {
    const menuHamburguer = document.querySelector('.menu')   

     menuHamburguer.classList.contains('active')
    ? menuHamburguer.classList.remove('active') 
    : menuHamburguer.classList.add('active') 
} 

menu.addEventListener('click',() => toogleClass())



