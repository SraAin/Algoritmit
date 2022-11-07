/*
1. Alusta kolme muuttujaa: pisimmän yhteisen alimerkkijonon eli lcs:n pituus ( aluksi 0), merkkijonon
   s2 indeksi johon tallentuu lcs:n viimeinen merkki (aluksi 0) ja pisin yhteinen alimerkkijono
   (aluksi '').
2. Luo kaksiulotteinen taulukko, eli matriisi, jonka korkeus on sama kuin ensimmäisen merkkijonon
   pituus ja leveys sama kuin toisen merkkijonon pituus. kaikkien alkioiden arvo on aluksi 0.
3. Käy matriisi ja merkkijonot läpi sisäkkäisillä silmukoilla. Jokaista s1:n alkiota vertaillaan
   vuorollaan kaikkiin s2:n alkioihin ja samalla ollaan vastaavan matriisin solun kohdalla.
4. Merkkien vertailu. Jos ollaan matriisin ekalla rivillä tai sarakkeessa, ja s1:n ja s2:n merkit
   ovat samat, laitetaan matriisiin arvo 1. Jos ei olla matriisin ekalla rivillä tai ekassa
   sarakkeessa ja s1:n ja s2:n merkit ovat samat, lisätään matriisin edellisen rivin edellisen
   alkion arvoon 1 ja sijoitetaan saatu arvo matriisiin sille paikalle missä ollaan.
5. Joka kierroksella matriisiin sijoitetun alkion arvoa verrataan siihen asti suurimpaan lcs:n
   pituuteen. Jos uusi arvo on > siihen asti suurin, se sijoitetaan suurimmaksi ja otetaan samalla
   talteen indeksi johon tallentuu on lcs:n viimeinen merkki s2:ssa.
6. Kun silmukat on käyty läpi ja tiedetään pisimmän yhteisen alimerkkijonon eli lcs:n pituus ja
   indeksi johon tallentuu lcs:n viimeinen merkki s2:ssa, voidaan niistä tiedoista määrittää lcs,
   joka palautetaan funktiosta. Vihje: debuggerin näkymä, jossa näkyy merkkijonojen 'GTC' ja 'TC'
   vertailumatriisi.
*/

// Algoritmin testaamiseen. Luo pitkän merkkijonon annetuista merkeistä
function genString(charset, n) {
  let str = '';
  const length = charset.length;

  for (let i = 0; i < n; i++) {
    str += charset.charAt(Math.floor(Math.random() * length));
  }

  return str;
}

function findLcs(s1, s2) {
  // Alustetaan kolme muuttujaa
  let lcslength = 0;
  let lcslast = 0;
  let lcs = '';

  // Kaksiulotteinen taulukko eli matriisi
  const matrix = [];

  // Luodaan yhtä monta tyhjää taulukkoa matriisiin kuin s1-merkkijonossa on merkkejä
  for (let i = 0; i < s1.length; i++) {
    matrix.push([]);
    // Lisätään jokaiseen kaksiuloitteiseen taulukkoon yhtä monta alkioita kuin s2-merkkijonossa on merkkejä
    for (let j = 0; j < s2.length; j++) {
      // Kaikkien taulukoiden alkioiden arvoiksi asetetaan 0
      matrix[i].push(0);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (s1[i] === s2[j]) {
        if (i === 0 || j === 0) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = matrix[i - 1][j - 1] + 1;
          if (matrix[i][j] > lcslength) {
            lcslength = matrix[i][j];
            lcslast = matrix[i].indexOf(lcslength) + 1;
          }
        }
      }
    }
  }

  lcs = s2.slice(lcslast - lcslength, lcslast);

  return lcs;
}

const charset1 = genString('ATGC', 4);
const charset2 = genString('ATGC', 4);
//const lcs = findLcs('ABCDEF', 'ABHDEF');
const lcs = findLcs(charset1, charset2);

console.log(charset1);
console.log(charset2);
console.log(lcs);

module.exports = { findLcs, genString };