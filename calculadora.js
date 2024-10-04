

alert('Acontinuación usaras la calculadora');

let numero1 = prompt('DIGITE PRIMER NUMERO');
let numero2 = prompt('DIGITE SEGUNDO NUMERO');


operacion = prompt('¿Que operación desea realizar?', 'sumar,restar,multiplicar,dividir')

if (operacion == "sumar") {
    let resultadosuma = parseInt(numero1) + parseInt(numero2);
    alert(' el resultado de su suma de ' + (numero1) + ' + ' + (numero2) + ' es ' + (resultadosuma));

}


if (operacion == "restar") {
    let resultadoresta = parseInt(numero1) - parseInt(numero2);
    alert(' el resultado de su resta de ' + (numero1) + ' - ' + (numero2) + ' es ' + (resultadoresta));

}


if (operacion == "dividir") {
    let resultadodivision = parseInt(numero1) / parseInt(numero2);
    alert(' el resultado de su division de ' + (numero1) + ' / ' + (numero2) + 'es' + (resultadodivision));

}

if (operacion == "multiplicar") {
    let resultadomultiplicacion = parseInt(numero1) * parseInt(numero2);
    alert(' el resultado de su multiplicación de ' + (numero1) + ' * ' + (numero2) + 'es' + (resultadomultiplicacion));

}