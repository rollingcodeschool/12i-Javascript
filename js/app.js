let month = window.prompt('Ingrese el mes de su cumpleaños');
console.log(month);
let day = window.prompt('Ingrese el día');
month = month.toLowerCase();

console.log(month);

switch(month) {
    case 'enero':
        if(day >= 20) {
            document.write('<p>Su signo es ACUARIO</p>');
            document.write('<img src="/assets/acuario.jpg">');
        } else {
            document.write('<p>Su signo es CAPRINORNIO</p>');
            document.write('<img src="/assets/capricornio.jpg">');
        }
        break;
    case 'febrero':
        if(day >= 20) {
            document.write('<p>Su signo es <b>PISCIS</b></p>');
            document.write('<img src="/assets/piscis.jpg">');
        } else {
            document.write('<p>Su signo es ACUARIO</p>');
            document.write('<img src="/assets/acuario.jpg">');
        }
        break;
        
    // case 'marzo':
    //     document.write('<p>Su signo es PISCIS</p>');
    //     break;
    default:
        document.write('<p>El mes ingresado no es correcto</p>');

}