/* Miksi algoritmi on naiivi? */
// Algoritmi on naiivi, koska roskapostisuodattimessa havainnot eli viestien sisältämät sanat
// ovat ehdollisesti riippumattomia toisistaan. Tämä tarkoittaa sitä, että sanojen järjestyksellä
// ei ole väliä, vaan naiivilla algoritmilla seurataan sitä, että kuinka paljon yksittäisiä
// negatiivisia sanoja viestistä löytyy.

/* Kuinka algoritmi pääpiirteissään toimii? */

const BayesClassifier = require('bayes-classifier');
const classifier = new BayesClassifier();

// Ensin jaetaan viestien sanat kahteen eri luokkaan; negatiivisiin eli roskaposteihin ja
// positiivisiin eli asiallisiin viesteihin
const spam = [
  'Get rich quick!',
  'Only 99,99$',
  'You won! Collect your winnigs',
];
const email = [
  'It is such a nice day',
  'Hi Frank! How are you?',
  'Welcome to our anniversary',
];

classifier.addDocuments(spam, 'negative');
classifier.addDocuments(email, 'positive');

// Treenataan algoritmia tunnistamaan ja erittelemään negatiiviset ja positiiviset sanat.
classifier.train();

// Eritellään uudet viestit negatiivisiin tai positiivisiin treenatun datan perusteella.
// Tulostetaan saadut tulokset konsoliin.
console.log(classifier.classify('Hi Frank! You suck'));
console.log(classifier.classify('You are doing great'));

console.log(classifier.getClassifications('Hi Frank! You are terrible'));