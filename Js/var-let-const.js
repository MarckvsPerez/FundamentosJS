/* eslint-disable no-var */

// Var - Permite declarar dos veces la misma variable
var edad = 10;
var edad = 20;
console.log(edad); // 20

// Let - No permite declarar dos veces la misma variable
let edadDos = 20;
edadDos = 10;
// let edadDos = 30: - Esta linia da error
console.log(edadDos); // 10

// Const no permite reasignarse
const edadTres = 10;
console.log(edadTres);
// edadTres = 9; - Esta linia da error

// Ambito de variables

// Var existe fuera del bloque
var edadCuatro = 30;
if (true) {
  var edadCuatro = 34;
  console.log(edadCuatro); //  34
}
console.log(edadCuatro); // 34

// Let i const solo existe dentro del bloque
const edadCinco = 1;
if (true) {
  const edadCinco = 12;
  console.log(edadCinco); //  12
}
console.log(edadCinco); // 1

// Const se puede modificar pero no reasignar
const arrayNumero = [1, 2, 3, 4];
// arrayNumero = [1, 2, 3, 4, 5]; - Esta linia da error
arrayNumero.push(5);
console.log(arrayNumero); // (5) [1, 2, 3, 4, 5]

const persona = {
  nombre: 'test',
  edad: 21,
};
persona.edad = 22;
console.log(persona); // {nombre: 'test', edad: 22}
