/*
1. Alusta kolme muuttujaa: suurin samojen alkioiden lkm, löydetty samojen alkioiden lkm,
   useimmin esiintyvän alkion arvo
2. Vertaa jokaista taulukon alkiota vuorollaan taulukon jokaiseen alkioon. Tämän voit
   toteuttaa kahdella sisäkkäisellä silmukalla joiden sisällä oleva if-lohko suorittaa vertailun.
   Jos alkiot ovat samat, lisätään löydettyä samojen alkioiden lkm:ää yhdellä.
3. Jos löydetty lkm > siihen asti suurin lkm, laitetaan löydetty suurimmaksi ja otetaan siitä
   indeksistä missä ollaan useimmin esiintyvän alkion arvo.
4. Aina kun taulukko on kerran käyty läpi, pitää löydetty samojen alkioiden lkm alustaa.
   Jokainen vertailukierros tuottaa oman tuloksensa, emmekä voi lisätä uutta tulosta edellisen
   päälle.
5. Kun on poistuttu silmukoista, palauta lopullinen useimmin esiintyvän alkion arvo.
*/

//*******************createNumArr*************************

// Funktio jolla luodaan testitaulukko, jossa n on alkioiden määrä
function createNumArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const rand = Math.floor(Math.random() * 9) + 1;
    arr.push(rand);
  }
  return arr;
}


//*******************findMostFreqBrute*************************

function findMostFreqBrute(arr) {
  let max = 1; // Suurin samojen alkioiden lkm
  let found = 1; // Kierroksella löydetty samojen alkioiden lkm
  let mostfreq; // useimmin esiintyvän alkion arvo

  // Miten aikavaativuus muuttuu, kun let j = (i + 1)
  // - Aikavaativuus paranee eli koodin ajaminen vie vähemmän aikaa

  // Vertaillaan yhden taulukon alkioita sisäkkäisillä silmukoilla
  for (let i = 0; i < arr.length; i++) {
    for (let j = (i + 1); j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        found++;
      }
      if (found > max) {
        max = found;
        mostfreq = arr[i];
      }
    }
    found = 1;
  }
  return mostfreq;
}

const arr = createNumArr(100000);
const mostfreqnum = findMostFreqBrute(arr);

console.log(mostfreqnum);

module.exports = { findMostFreqBrute, createNumArr };


// Minkä arvelisit olevan algoritmin aikavaativuuden ja miksi?
// - Algoritmin aikavaativuus on neliöllinen O(n*n), koska se käyttää brute force menetelmää.
//   Brute force vertaa jokaisen arvon yksitellen.
