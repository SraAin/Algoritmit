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

//*******************findMostFreq*************************

/*
1. Luo tyhjä Map -tietorakenne
2. Käy silmukalla taulukko läpi ja laita läpikäytävä alkio muuttujaan key (mapin avain)
3. Tutki samassa silmukassa, että jos Mapissa ei jo ole avainta key, luodaan mappiin uusi
   avain-arvo -pari "key, 1" eli asetetaan avaimen arvoksi 1. Muuten mapissa on jo sama avain
   jonka kohdalla ollaan. Tällöin otetaan avaimen arvo, kasvatetaan sitä yhdellä ja laitetaan
   uusi arvo Mappiin.
4. Kun Map -tietorakenne, jossa ovat avaimina alkiot ja arvoina niiden lukumäärät, on valmis,
   haetaan Mapista suurin arvo ja sitä vastaava avain joka palautetaan.
*/

function findMostFreq(arr) {
  // Luodaan tyhjä Map -tietorakenne
  const map = new Map();

  arr.forEach((elem) => {
    const key = elem;

    // Jos avainta ei ole jo olemassa, luodaan sellainen ja annetaan sen arvoksi 1
    if (!map.has(key)) {
      map.set(key, 1);
    } else { // Muuten haetaan jo olemassa oleva avain ja nostetaan sen arvoa aina yhdellä
      const getkey = map.get(key);

      map.set(key, getkey + 1);
    }
  });

  const maxvalue = Math.max(...map.values());

  for (const [key, value] of map) {
    if (value === maxvalue) {
      return key;
    }
  }
}

const arr = createNumArr(100000);
// const arr = [1, 4, 8, 6, 5, 1, 9, 4, 6, 6];

const mostfreqnum = findMostFreq(arr);

console.log(mostfreqnum);

module.exports = { findMostFreq, createNumArr };


// Minkä arvelisit olevan algoritmin aikavaativuuden ja miksi?
// - Aikavaativuus on logaritminen tai lineaarinen, koska algoritmissa käytetään dynaamista
//   menetelmää.
