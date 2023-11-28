const readlineSync = require(`readline-sync`);
const { genNumAl, verAd } = require(`./adivinanza`);

const obtNumUs = () => {
  return readlineSync.question(`Ingresa un numero: `);
};

const juegoAdivinanza = () => {
  const numS = genNumAl();
  let numA = 0;

  console.log("¡Bienvenido a Adivina el número secreto!");
  console.log("Intenta adivinar el número del 1 al 100.\n");

  while (parseInt(numA) !== numS) {
    numA = obtNumUs();
    verAd(numS, numA);
  }
};

juegoAdivinanza();
