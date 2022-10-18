const rl = require('readline-sync');

/*
1. Luodaan tyhjä merkkijono
2. Kysytään merkkiä niin kauan kun merkki ei ole #
3. Jos merkki ei ole #, lisätään se merkkijonoon, muuten poistutaan silmukasta
4. Silmukasta poistumisen jälkeen palautetaan merkkijono.
*/

function collectFeed() {
  // luodaan tyhjä merkkijono
  let str = '';
  let char;

  // Niin kauan kuin merkki ei ole '#'
  while (char !== '#') {
    char = rl.question('Anna merkki: ');
    // Jos merkki ei ole '#', lisätään se merkkijonoon
    if (char !== '#') {
      str = str + char;
    } else {
      // Poistutaan silmukasta
      break;
    }
  }

  // Palautetaan merkkijono
  return str;
}

const mj = collectFeed();
console.log('Palautettu merkkijono: ' + mj);

module.exports = collectFeed;
