console.log('Hola desde arrays');
let array = [ "Jhon", "Pablo" ];  
console.log(array);

array.push("Laura");
array.push("Luciano");
array.push("Tomas");
array[0] = "Jose";
// array = ["Algo", "y algo mas"]
console.log(array);
// console.log(array);
//             0                                                                                                                           17 
//longitud cantidad de elementos que posee mi arreglo = 5

// longitud de 18 elementos
console.log('Longitud del array: ', array.length);

for(let i=0; i < array.length; i++) {
    // i

    document.write(array[i] + '<br>')
                        //18
}

