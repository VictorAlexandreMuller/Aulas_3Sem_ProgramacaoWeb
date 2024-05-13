let button = document.querySelector('#button');
button.innerHTML = 'Legal!';

let titulo = document.querySelector('#titulo');
titulo.innerHTML = 'Lista de Compras';

document.querySelector('#descricao').innerHTML = 'Digite um item';

document.querySelector('#changeImg').onclick = function() {
    document.querySelector('img').setAttribute('src', 'images/cat.png');
    document.querySelector('img').classList.add('valid');
}

document.querySelector('#play').onclick =  function() {
    document.querySelector('audio').play();

    let newImg = document.createElement('img');
    newImg.src = 'images/horse.png';
    listaImagens.appendChild(newImg);
}

document.querySelector('#descricao').style.color = 'red';


let listaImagens = document.querySelector('#imgs');

document.querySelector('#removeImg').onclick = function() {
    document.querySelectorAll('img').forEach((img, index) => {
        document.querySelector('#imgs').removeChild(img);
    })
};

