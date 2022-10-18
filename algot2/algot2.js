const rl = require('readline-sync');

/*
1. Funktion ensimmäisellä suorituskerralla on käytössä tyhjä merkkijono, str = ''
2. Kysytään merkkiä
3. Jos merkki on #,  palautetaan merkkijono.
4. Muuten lisätään merkki merkkijonoon ja toistetaan algoritmi kutsumalla funktiota
   itseään (rekursio). Käytä return -avainsanaa rekursiokutsun edessä. Huomaa että uusilla
   kierroksilla, eli rekursioissa, merkkijonoa ei enää alusteta tyhjäksi vaan siinä pitää
   olla tallessa edellisillä kierroksella annetut merkit, eli rekursiossa kutsu on collectFeedRec(str).
*/

function collectFeedRec(str = '') {
  const char = rl.question('Anna merkki: ');

  if (char === '#') {
    return str; // Rekursion base case ja lopetus
  } else {
    // Rekursiivinen case
    str = str + char; // Lisätään merkit merkkijonoon
    return collectFeedRec(str); // Kutsutaan funktiota itseään (rekursio)
  }
}

const mj = collectFeedRec();
console.log('Palautettu merkkijono: ' + mj);

module.exports = collectFeedRec;
