console.log('Ejercicio de dados');
let resultados = [];
let ganador;
let maximo = 0;
                    //0     1        2        3         4
let jugadores = ["Carla", "María", "Juan", "Jose", "Pedro"];
// Obtengo los números correctos de dados entre 1 y 6
// Math.trunc((Math.random()) * 6) + 1
let button = document.querySelectorAll('button');
console.log(button);

//i hace referencia a las rondas de tiros
for(let i = 0; i < 10; i++) {
    //Hace referencia a cada jugador
    //i = 
    
    for(let j = 0; j < jugadores.length; j++) {
        //***** i=0 *
        console.log(button[j].classList);

        if(button[j].classList.contains('disabled')) button[j].classList.remove('disabled');
        // if(button[j].classList.add('disabled'));
        (function(j) {
            setTimeout(() =>  {
                console.log('This j', j);
            }, 2000)
        })
        //j = 1
        let dadoUno = Math.trunc((Math.random()) * 6) + 1;
        let dadoDos = Math.trunc((Math.random()) * 6) + 1;
        console.log(jugadores[j] + ' tiro dado 1: ' + dadoUno);
        console.log(jugadores[j] + ' tiro dado 2: ' + dadoDos);
        resultados[j] += dadoUno + dadoDos;
        
        console.log('Resultados', resultados[j]);
    } 
    
    
    
    //                    5   +    3
    // resultados.push(dadoUno + dadoDos);
    // console.log('resultados', resultados);
    // suma = suma + dadoUno + dadoDos;
    // console.log('SUMA', suma);
}    




console.log('Resultados', resultados);   
                //0
for(let i = 0; i< jugadores.length; i++) {
    console.log(`El jugador ${jugadores[i]} obtuvo ${resultados[i]}`);
        //0
    if(maximo < resultados[i]) {
        maximo = resultados[i];
        ganador = jugadores[i];
    }
}

console.log(`El ganador es ${ganador} con un puntaje de ${maximo}`);

async function tirarDados(player){
    let dadoUno = Math.trunc((Math.random()) * 6) + 1;
    let dadoDos = Math.trunc((Math.random()) * 6) + 1;
    return alert(`El resultado obtenido por ${jugadores[player]}: ${ dadoUno + dadoDos } (${dadoDos} + ${dadoUno})`);
}