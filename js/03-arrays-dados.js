console.log('Ejercicio de dados');
let resultados = [];
let ganador;
let maximo = 0;
                    //0     1        2        3         4
let jugadores = ["Carla", "María", "Juan", "Jose", "Pedro"];
// Obtengo los números correctos de dados entre 1 y 6
// Math.trunc((Math.random()) * 6) + 1


for(let i = 0; i < 10; i++) {
    // i hace referencia a las rondas de tiros
    
    for(let j = 0; j < jugadores.length; j++) {
        // j Hace referencia a cada jugador
        if(resultados[j] == undefined) {
            console.log('Entra al if')
            resultados[j] = 0;
        }
        let dadoUno = Math.trunc((Math.random()) * 6) + 1;
        let dadoDos = Math.trunc((Math.random()) * 6) + 1;
        console.log(jugadores[j] + ' tiro dado 1: ' + dadoUno);
        console.log(jugadores[j] + ' tiro dado 2: ' + dadoDos);
        resultados[j] += dadoUno + dadoDos;
        console.log('Resultados', resultados[j]);
    } 
}    
console.log('Resultados', resultados);            

for(let i = 0; i< jugadores.length; i++) {
    console.log(`El jugador ${jugadores[i]} obtuvo ${resultados[i]}`);
        //0
    if(maximo < resultados[i]) {
        maximo = resultados[i];
        ganador = jugadores[i];
    }
}

console.log(`El ganador es ${ganador} con un puntaje de ${maximo}`);