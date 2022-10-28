/*
1. Kerää molemmista merkkijonoista kaikki alimerkkijonot kahteen taulukkoon. Alimerkkijonojen
   kerääminen onnistuu sisäkkäisiä silmukoita apuna käyttäen. Tätä varten kannattaa tehdä
   apufunktio getAllSubstrs(str) jota voit käyttää kaksi kertaa pääfunktiossa findLcsBrute.
2. Vertaile kahdessa taulukossa olevia alimerkkijonoja ja poimi yhteiset uuteen taulukkoon
3. Etsi taulukosta merkkijono jossa on eniten merkkejä ja palauta se
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

// Apufunktio, jolla luodaan merkkijonoista alimerkkijonot
function getAllSubstrs(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      // str merkkijono viipaloidaan slice-metodilla
      const substr = str.slice(i, j);
      result.push(substr);
    }
  }
  return result;
}

// Tehtävä 6: Tehdään homma järkevämmällä tietorakenteella
// eli setillä.

// Käytä setin leikkausta (intersection) hyväksi
// Setin ansiosta algoritmi nopeutuu hieman

// Pääfunktio
function findLcsBrute(s1, s2) {
  // Kutsutaan getAllSubstrs-funktiota kaksi kertaa jolloin saadaan kaksi taulukkoa, jotka muunnetaan seteiksi.
  const s1subs = new Set(getAllSubstrs(s1));
  const s2subs = new Set(getAllSubstrs(s2));

  // Etsitään seteistä yhteiset merkkijonot ja lisätään ne uuteen settiin intersect
  const intersect = new Set([...s1subs].filter((str) => s2subs.has(str)));

  // Etsitään intersect-setistä pisin merkkijono reduce-metodilla
  const lcs = [...intersect].reduce((prstr, crstr) => {
    if (prstr.length > crstr.length) {
      return prstr;
    } else {
      return crstr;
    }
  });

  return lcs;
}

const charset1 = genString('ATGC', 100);
const charset2 = genString('ATGC', 100);
const lcs = findLcsBrute(charset1, charset2);


console.log(charset1);
console.log(charset2);
console.log(lcs);


module.exports = { getAllSubstrs, findLcsBrute, genString };