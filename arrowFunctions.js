// Funciones
function sumar(num) {
  console.log(num);
}

sumar(23); // 10

// Arrow
const sumar_2 = (num) => {
  console.log(num);
};
sumar_2(20);

// Arrow return
const resta = (a, b) => a - b;
const resultado = resta(2, 1);
console.log(resultado);

const hellow = (msg) => "hola: " + msg;
const saludar = hellow("Marc");
console.log(saludar);

// Parametro por defecto
const sumaTres = (num = 0) => console.log(num + 3);
sumaTres(3); // 6
sumaTres(); // 3
