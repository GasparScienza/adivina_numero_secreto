const genNumAl = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verAd = (nSecreto, nAdivinado) => {
  if (nAdivinado === nSecreto) {
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  } else if (nAdivinado > nSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  }
};

module.exports = {
  genNumAl,
  verAd,
};
