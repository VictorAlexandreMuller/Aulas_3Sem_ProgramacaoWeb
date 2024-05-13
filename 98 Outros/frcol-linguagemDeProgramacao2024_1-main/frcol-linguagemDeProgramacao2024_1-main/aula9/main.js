let btns = document.querySelectorAll('a','.btn');
let currentUrl = window.location.href;

for (let btn of btns) {
    if (btn.href === currentUrl) {
        btn.classList.add('active');
        break;
    }
}

function btnClicked(number) {
    console.log('Button ' + number + ' clicked');
}


let teclas = document.querySelectorAll('.tecla');

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        console.log(tecla.value);
    });
});

for (let tecla of teclas) {
    tecla.addEventListener('click', () => {
        console.log(tecla.value);
    });
}