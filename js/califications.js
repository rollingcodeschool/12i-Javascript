// Sumatoria de las calificaciones ingresadas
let sum = 0;
// Cantidad de valores ingresados
let count = 0;
let calification;

do {
    // Obtener una nota válida
    // Tomar todas las calificaciones de mis alumnos.
    do {
        /* con parseInt transformo el valor en un entero y si no lo puede
           convertir a numero me devolverá "NaN" el cuál es equivalente a un false en
           una condición
        */             //9 number          //9 string
        calification = parseInt(window.prompt('Ingrese una nota entre 1 y 10'));
        console.log('Calification inside while', calification);
    } while(calification < 1 || calification > 10);
    console.log('sale del while de notas válidas');
    // 0 = 26 + NaN  **ERROR**
    //calification = NaN

    if(calification) {        
        // 7 = 7 + 7 
        sum = sum + calification;
        // sum = 14
        count = count + 1;
        // cont = 2
    }

} while(calification);
// valores evaluados como false: false, '', null, undefined, 0, NaN
console.log(`Sumatoria de notas ${sum}`);
console.log(`Número de notas cargas: ${count}`);

let average = sum / count;

console.log(typeof(average));

console.log("El promedio de las notas es: " + average);
// calcular el promedio del alumno
//let average = sum / count 

