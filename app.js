'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')
const botaoTrocaAuto = document.getElementById('troca-auto')

const imagens = ('./img/joker.png', './img/junpei.png' , './img/makoto.png', './img/yutari.png', './img/fighter.png')
const imagemAtual = 0;

function trocarImagem(){
    const imagem = ('url(./img/'+document.getElementById('imagem').value + '.png)')
    document.documentElement.style.setProperty('--bg-img', imagem)
}

function trocaAuto(){
    const body = document.querySelector('body')
    body.classList.toggle('animacao')
    
}


botaoTrocarImagem.addEventListener('click', trocarImagem)

botaoTrocaAuto.addEventListener('click', trocaAuto)