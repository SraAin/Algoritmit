/* Millä tavalla päättelypuu eroaa logistisesta regressiosta? */
// Koulutettava data on eri muodossa. Logistisessa regressiossa olettaa, että data on lineaarisessa
// muodossa kun taas päättelypuu erottelee datan epälineaarisesti.

const DecisionTree = require('decision-tree');

/*
Koulutettava data
*/
const trainingData = [
  { age: 18, gender: 'male', income: 10, purchased: false },
  { age: 20, gender: 'female', income: 20, purchased: false },
  { age: 24, gender: 'male', income: 30, purchased: true },
  { age: 30, gender: 'female', income: 50, purchased: true },
  { age: 32, gender: 'male', income: 50, purchased: false },
  { age: 40, gender: 'female', income: 55, purchased: true },
  { age: 45, gender: 'male', income: 20, purchased: true },
  { age: 51, gender: 'female', income: 60, purchased: false },
  { age: 60, gender: 'male', income: 65, purchased: true },
  { age: 65, gender: 'female', income: 15, purchased: false },
];

/*
setUpDt-funktio luo päättelypuun mallin.
*/
function setUpDt(age, gender, income, purchased, trdata) {
  const classname = purchased;
  const features = [age, gender, income];

  const dt = new DecisionTree(classname, features);
  dt.train(trdata);

  return dt;
}

// prediction-funktio saa parametrikseen koulutetun mallin. Funktio palauttaa uuden henkilön
// ennustuksen tuotteen ostosta.
function prediction(model, a, g, i) {
  const prediction = model.predict({
    age: a,
    gender: g,
    income: i,
  });

  return prediction;
};

const age = 34;
const gender = 'male';
const income = 28;

const model = setUpDt('age', 'gender', 'income', 'purchased', trainingData);
const proba = prediction(model, age, gender, income);

console.log(proba);