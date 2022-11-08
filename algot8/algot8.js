// REGRESSIOALGORITMI

// Polynominen regressio
const PlRegression = require('ml-regression-polynomial');

// Eksponentiaalinen regressio
const ExRegression = require('ml-regression-exponential');

const year = [1960, 1970, 1980, 1990, 2000, 2010];
const population = [2, 4, 6, 10, 18, 33];
const degree = 3; // Asetetaan polynomin maksimiaste

const regression = new PlRegression(year, population, degree);
// const regression = new ExRegression(year, population);


// Väkiluku arviot vuosilta 2020, 2050, 2100
console.log('2020: ' + regression.predict(2020));
console.log('2050: ' + regression.predict(2050));
console.log('2100: ' + regression.predict(2100));