//Ejercicio 1: Imprimir todos los dígitos decimales, del 0 al 9, utilizando una repetición.
// for(let i = 0; i <= 9; i = i + 1) {
    
//     document.write(i + '<br>');

// }

//Ejercicio 02: Imprimir todos los números entre el 100 y el 199.
// for(let i = 100; i <= 199; i++) {
//     document.write(i + '<br>');
// }

//Ejercicio 03: Imprimir los números entre el 5 y el 24, saltando de tres en tres
// for(let j = 5; j <= 24; j = j + 3) {
//     document.write(j + '<br>');
// }

//Ejercicio 04: Requerir al usuario que ingrese un número entero positivo e 

// ****DONE imprimir todos los números correlativos entre el ingresado por el usuario y uno menos del doble del mismo.

let numero;
// numero = 5
        //false        //NaN
                    // !false
                    // true
do {
    numero =  window.prompt("Ingrese un valor entero positivo");
    numero = parseInt(numero);
    console.log('Inside while', numero);
} while(numero <= 0 || !numero)
        //false           //NaN  




// ingreso x = 15
// 12, 13, 14
// hasta (x * 2) - 1
// iteracion i = i + 1 
let limite = (numero * 2) - 1;
for(let i = numero; i <= limite; i++){
    document.write(i + '<br>');
}

//
// for()


document.write('Salio del bucle');