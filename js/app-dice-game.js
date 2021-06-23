console.log('Ejercicio de dados');
class Player {
    constructor(name, lastname, score, victories) {
        this.name = name;
        this.lastname = lastname;
        this.score = score;
        this.victories = victories
    }
    dropDices(dices, faces) {
        let dado1 = parseInt(Math.random() * faces) + 1
        let dado2 = parseInt(Math.random() * faces) + 1
        this.score += dado1 + dado2 
        return `El resultado del jugador ${this.name} es igual a ${dado1 + dado2}`;
    }
}

class Game {
    constructor(faces, dices, rounds) {
        this.faces = faces;
        this.dices = dices;
        this.rounds = rounds;
    }
}

let players = [];
let player1 = new Player('Carla', 'Perez', 0, 0);
let player2 = new Player('Jose', 'Benitez', 0,0);
players.push(player1);
players.push(player2);

console.log('PLAYER', players)
//instancia del juego
let game = new Game(10, 2, 20);

console.log(player1);
console.log(game);

for(let i=0; i<players.length; i++) {
    console.log(players[i].dropDices(game.dices, game.faces));
}

console.log(players)
















// let ganador;
// let maximo = 0;
// let resultados = [0,0,0,0,0];
//                     //0     1        2        3         4
// let jugadores = ["Carla Doe", "María", "Juan", "Jose", "Pedro"];
// // Obtengo los números correctos de dados entre 1 y 6
// Math.trunc((Math.random()) * 6) + 1
// let button = document.querySelectorAll('button');
// console.log(button);

// for(let i = 0; i < 10; i++) {
//     // i hace referencia a las rondas de tiros
    
//     for(let j = 0; j < jugadores.length; j++) {
//         // j Hace referencia a cada jugador
//         if(resultados[j] == undefined) {
//             console.log('Entra al if')
//             resultados[j] = 0;
//         }
//         let dadoUno = Math.trunc((Math.random()) * 6) + 1;
//         let dadoDos = Math.trunc((Math.random()) * 6) + 1;
//         console.log(jugadores[j] + ' tiro dado 1: ' + dadoUno);
//         console.log(jugadores[j] + ' tiro dado 2: ' + dadoDos);
//         resultados[j] += dadoUno + dadoDos;
//         console.log('Resultados', resultados[j]);
//     } 
// }    




// console.log('Resultados', resultados);   
//                 //0
// for(let i = 0; i< jugadores.length; i++) {
//     console.log(`El jugador ${jugadores[i]} obtuvo ${resultados[i]}`);
//         //0
//     if(maximo < resultados[i]) {
//         maximo = resultados[i];
//         ganador = jugadores[i];
//     }
// }

// console.log(`El ganador es ${ganador} con un puntaje de ${maximo}`);

// async function tirarDados(player){
//     let dadoUno = Math.trunc((Math.random()) * 6) + 1;
//     let dadoDos = Math.trunc((Math.random()) * 6) + 1;
//     return alert(`El resultado obtenido por ${jugadores[player]}: ${ dadoUno + dadoDos } (${dadoDos} + ${dadoUno})`);
// }