#! node
/* Script qui permet d'afficher la position d'un fichier .txt dans un autre ficher .txt*/
const fs = require('fs');
const c1 = fs.readFileSync(process.argv[2],"utf8").split('\n');
const c2 = fs.readFileSync("./" + process.argv[3],"utf8").split('\n');
c1.pop(c1[c1.length - 1]);
c2.pop(c1[c2.length - 1]);
console.log(c1);
console.log(c2);

let ligne1 = 0; let colonne1 = 0;
let ligne2 = 0; let colonne2 = 0;

function correspondance(c1, c2, ligne1, colonne1) {
  while ( ligne2 < c1.length ) {
    while (colonne2 < c1[ligne2].length ) {
      if (c1[ligne2][colonne2] !== c2[ligne1 + ligne2][colonne1 + colonne2]) {
        return false;
      }
      colonne2++
    }
    colonne2 = 0;
    ligne2++;
  }
  return true;
}

function rectangle(c1, c2) {
  while ( ligne1 < c2.length ) {
    while ( colonne1 < c2[ligne1].length ) {
        if (c2[ligne1][colonne1] === c1[0][0]) {
          if (correspondance(c1, c2, ligne1, colonne1)) {
            return true;
          }
        }
      colonne1++;
    }
    colonne1 = 0;
    ligne1++;
  }
  return false;
}

if (rectangle(c1, c2)) {
  console.log(ligne1, colonne1)
} else {
  console.log('No match')
}
