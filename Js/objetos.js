// Objetos

const mascota = {
  nombre: 'chanel',
  edad: 8,
  razas: ['pelo', 'sin pelo'],
};

mascota.id = 'asdasdas';

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.razas[0]);

// Destructuring crea variables con las propiedades de los objetos
const {edad, nombre} = mascota;
console.log(edad);
console.log(nombre);

// Objetos dentro de objetos
const web = {
  nombre: 'www.test.com',
  redes: {
    insta: 'marckvs',
    YT: 'Marcvs',
  },
};

console.log(web.redes.YT);

const {insta, YT} = web.redes;
console.log(insta, YT);
