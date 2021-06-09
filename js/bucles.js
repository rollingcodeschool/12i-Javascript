let calification;
// transformando cadena de texto obtenida en el prompt a un numero entero.
// calification = parseInt(calification);
                //-1
            //false              //true
// while(calification > 10 || calification < 1) {
//     calification = window.prompt("Recuerde que la nota debe ser entre 1 y 10");
//     console.log('Entro al while');
// }


do {
    console.log('Entro al DO WHILE');
    calification = window.prompt("Recuerde que la nota debe ser entre 1 y 10");
    calification = parseInt(calification);
} while(calification > 10 || calification < 1);

console.log('Termino el bucle while')

//-2 -1 0 
// 1 2 3 4 5 6 7 8 9 10 
//11 12 13