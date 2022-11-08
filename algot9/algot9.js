const jsregression = require('js-regression');

/*
TrainingData on on tunnettua (hatusta vedettyä) dataa, joka kertoo, onko henkilö [ikä, sukupuoli (1==m, 2==n),
vuositulot tuhatta euroa, ostanut hilavitkuttimen (0==ei, 1==kyllä)].
*/
const trainingData = [
  [18, 1, 10, 0],
  [20, 2, 20, 0],
  [24, 1, 30, 1],
  [30, 2, 50, 1],
  [32, 1, 50, 0],
  [40, 2, 55, 1],
  [45, 1, 20, 1],
  [51, 2, 60, 0],
  [60, 1, 65, 1],
  [65, 2, 15, 0],
];

/* logReg -funktio tuottaa logistisen regressiomallin. Mallin tuottava algoritmi on
melko monimutkainen, joten yksinkertaistamisen vuoksi on käytetty valmista kirjastoa.
Parametrit a,l ja i vaikuttavat algoritmin tehokkuuteen: tarkkuus vs. nopeus. Niiden
arvoja säädetään riippuen datan määrästä.
*/
function logReg(a, l, i, trdata) {
  // regressio-olio logistic syntyy kirjaston algoritmilla
  const logistic = new jsregression.LogisticRegression({
    alpha: a,
    lambda: l,
    iterations: i,
  });

  /*** Harjoitetaan logistista regressiota harjoitusdatalla ***/
  const model = logistic.fit(trdata);
  return model; // palautetaan harjoitettu malli
}

// Prediction saa parametreikseen harjoitetun mallin ja selittävät muuttujat
function prediction(model, x, y, z) {
  // console.log(model);
  /*** Harjoitetusta mallista saadaan vakio ja kulmakerroin ***/
  const a = model.theta[0]; // vakio
  const b = model.theta[1]; // kulmakerroin
  const c = model.theta[2];
  const d = model.theta[3];
  /*** Lasketaan todennäköisyys logistisen regression kaavalla ***/
  const probability = 1 / (1 + Math.exp(-(a + b * x + c * y + d * z)));
  return probability;
}

// Selitettävät muuttujat
const age = 43;
let gender = 1;
const yincome = 35;

const model = logReg(0.001, 0, 1000000, trainingData);
const proba = prediction(model, age, gender, yincome);

if (gender === 1) {
  gender = 'mies';
} else {
  gender = 'nainen';
}

console.log(
  'Todennäköisyys, että ' +
    age +
    ' vuotias ' +
    gender +
    ', jonka vuosittaiset tulot ovat ' +
    yincome +
    ' tuhatta ostaa hilavitkuttimen on ' +
    proba.toFixed(2)
);
