// Var - Permite declarar dos veces la misma variable
var edad = 10;
var edad = 20;
console.log(edad); // 20

// Let - No permite declarar dos veces la misma variable
let edad_2 = 20;
edad_2 = 10;
// let edad_2 = 30: - Esta linia da error
console.log(edad_2); //10

// Const no permite reasignarse
const edad_3 = 10;
// edad_3 = 9; - Esta linia da error

// Ambito de variables

// Var existe fuera del bloque
var edad_4 = 30;
if (true) {
  var edad_4 = 34;
  console.log(edad_4); //  34
}
console.log(edad_4); // 34

// Let i const solo existe dentro del bloque
let edad_5 = 1;
if (true) {
  let edad_5 = 12;
  console.log(edad_5); //  12
}
console.log(edad_5); // 1

// Const se puede modificar pero no reasignar
const arrayNumero = [1, 2, 3, 4];
// arrayNumero = [1, 2, 3, 4, 5]; - Esta linia da error
arrayNumero.push(5);
console.log(arrayNumero); // (5) [1, 2, 3, 4, 5]

const persona = {
  nombre: "test",
  edad: 21,
};
persona.edad = 22;
console.log(persona); // {nombre: 'test', edad: 22}
