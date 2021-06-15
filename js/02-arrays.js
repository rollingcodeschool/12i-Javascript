let provincias = ["Buenos Aires", "Cordoba", "Santa", "Misiones", "Mendoza", "San Juan", "Tucuman"]; //7
let provincias2 = ["Catamarca", "Jujuy", "Rio Negro"]                                                                     //6
let arrayConcatenados = provincias.concat(provincias2)
console.log(arrayConcatenados);
// Longitud acutal 11   -- 0 a 10 INDEX    
    //contador //condicion  //acumulador
console.log(`Ultimo elemento: ${provincias[provincias.length - 1]}`);    
for(let i = 0; i < arrayConcatenados.length; i++) {
    // i = 0
    document.write(arrayConcatenados[i]);
       1     != 6
        //true
    if(i != (arrayConcatenados.length - 1)) {
        document.write(" - ");
    }
    
    


}

console.log('Salio del FOR');