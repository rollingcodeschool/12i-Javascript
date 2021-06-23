// let name = 'Fuera del objeto';

let pokemon1 = {
    type: 'Fire',
    name: 'Charmander',
    evolutions: ['Charmeleon', 'Charizar', 'Charm'],
    attacks: ['Tirar fuego', 'Cabezazo Letal', 'Volar', 'Escapar'],
    captured: true,
    age: 8,
    sayHello: function(master) {
        console.log(`Hola soy ${this.name} y mi entrenador es ${master}`)
    },
    attack: function() {
        console.log(this.attacks[1]); 
    }
}

let pokemon2 = {
    type: 'Water',
    first: 'Bubble',
    evolutions: ['Water1', 'Water1', 'Water2'],
    attacks: ['Tirar fuego', 'Cabezazo Letal', 'Volar', 'Escapar'],
    captured: true,
    age: 8,
    sayHello: function() {
        console.log(`Hola soy ${this.name}`)
    },
    attack: function() {
        console.log(this.attacks[1]); 
    }
}
// Mostrar el objeto completo
console.log(pokemon1);


pokemon1.evolutions.map(function (el) {
    console.log(el);
})
let pokemones = [pokemon1, pokemon2];
pokemon1.sayHello('Ash');
console.log(pokemones)