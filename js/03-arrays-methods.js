let copa = [
  'Brasil','Chile','Chile','Uruguay','Brasil','Brasil','Colombia','Brasil','Brasil','Uruguay','Argentina','Argentina','Brasil','Uruguay','Uruguay','Uruguay','Paraguay','Perú','Uruguay','Bolivia','Uruguay','Argentina','Argentina','Uruguay','Argentina','Paraguay','Brasil','Argentina','Argentina','Argentina','Uruguay','Argentina','Perú','Argentina','Uruguay','Argentina','Argentina','Uruguay','Argentina','Uruguay','Uruguay','Brasil','Argentina','Uruguay','Brasil','Uruguay','Uruguay'
];

function arrayMap() {
    let dolar = [ 10, 20, 30, 40, 32, 89, 54];

    let pesos = dolar.map(function(valor) {
        return valor * 150;
    })
    console.log(dolar);
    console.log(pesos);
}

function arrayFilter() {
    let argentina = copa.filter(function(element) {
        // console.log(element == 'Argentina');
        return element != 'Argentina';
    });
    console.log(argentina.length);
    console.log(argentina);
}

// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
function arrayFind() {
    let i = 0;
    let elementoEncontrado = copa.find(function(element) {
        i++;
        // console.log(element == 'Argentina');
        return element == 'Argentina';
    });
    console.log(i);
    console.log(elementoEncontrado);
}

//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
function arrayFindIndex() {


    let index = copa.findIndex(function(element) {
        return element == 'Bolivia1'
    });
    console.log(index);
    copa.splice(index, 1);
    console.log(copa);
}

function arrayFill(pais) {
    // else 
    copa.fill(pais);
    console.log(copa)
}


function arraySome() {
    // else 
    console.log(copa.some(function(item){
        return item == 'Hasdas';
    }));
    
}

function arrayEvery() {
    // else 
    console.log(copa.every(function(item){
        console.log('every')
        return item == 'Argentina';
    }));
    
}
arrayFill('Argentina')
arrayEvery();
// arrayFill('Venezuela');

// function reciba la cantidad maxidad que tiene
