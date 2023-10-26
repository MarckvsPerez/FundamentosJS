/**
 *  Funcion que devuelve un console.log con el parametro de entrada
 * @param {*} num Muestra el parametro en la consola
 */
function sumar(num) {
  console.log(num);
}

sumar(23); // 10

// Arrow
const sumarDos = (num) => {
  console.log(num);
};
sumarDos(20);

// Arrow return
const resta = (a, b) => a - b;
const resultado = resta(2, 1);
console.log(resultado);

const hellow = (msg) => 'hola: ' + msg;
const saludar = hellow('Marc');
console.log(saludar);

// Parametro por defecto
const sumaTres = (num = 0) => console.log(num + 3);
sumaTres(3); // 6
sumaTres(); // 3
