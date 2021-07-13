let form = document.forms[1];
let inputs = form.querySelectorAll('input, select');

let button = document.getElementById('submit');

// inputs = [...inputs];
// console.log(inputs);

let valid = true;

inputs.forEach(el => {
    console.log(el.value + ': ' + el.checkValidity());
    // false
    if(el.checkValidity() == true) {
        console.log('no modifico la validez')
    } else { 
        valid = false
    };
    // el.checkValidity() ?? console.log(`El valor no es verdadero nullish coalescing ${el.checkValidity()}`);
});

if(valid) {
    button.classList.remove('disabled');
}

function enviarUsuario() {
    console.log(inputs);
}


