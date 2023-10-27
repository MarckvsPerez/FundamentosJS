// Template String (``) permite usar logica y variables dentro de una cadena

const numero = (param, mult) => `el resultado es: ${param * mult}`;

const resultado = numero(19, 5);

console.log(resultado);
