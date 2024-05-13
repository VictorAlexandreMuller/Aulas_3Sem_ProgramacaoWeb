// setTimeout(myDisplay, 3000);

// function myDisplay(algumaCoisa) {
//     console.log('Passou 3 s!');
// }


// setInterval(resetClock, 1000);

// function resetClock() {
//     let date = new Date();

//     document.querySelector('#clock').innerHTML = 
//         date.getHours()+":" +
//         date.getMinutes()+":" +
//         date.getSeconds();
// }

// console.log('Olá!');


// let fileName = "data.json";

// fetch("https://66302734c92f351c03d923c2.mockapi.io/cliente")
//     .then(function(response) { 
//         return response.json();
//     })
//     .then(data => 
//         { throw new Error('Meu erro customizado!') })
//     .catch(error => console.error('Erro:', error));


// function facaAlgo(data) { 
//     data.forEach(cliente => {
//         console.log(`${cliente.name} - (${cliente.age})`);
//     });
// }

// POST
fetch("https://66302734c92f351c03d923c2.mockapi.io/cliente", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Peter Parker',
        age: 25
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));