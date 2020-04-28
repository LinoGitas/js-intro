"use strict";

// ciklas - kazkas, kas yra kartojama
    // kas tas kazkas?
    // kas kartoja?
    // kiek kartu?

/*for ( let i=0; i<5; i++) {
    console.log('Skaicius: ', i );
}

for ( let i=2000; i<2021; i++) {
    console.log('Skaicius: ', i );
}

for ( let i=0; i<10; i=i+2) {
    console.log('Skaicius: ', i );
}
*/

console.log('----------------');
console.log('Sumavimas intervale');
console.log('----------------');

// 0 - 0  -0
// 0 - 4  -10
// 0 - 100 -5050
// 574 - 815 labai didelis skaicius
// -50 - 50  0
// -70 - 30  ne mazas neigiamas skaicius

const nuo = 0;
const iki = 5;
let suma = 0;

for ( let i=nuo; i<=iki; i++) {
    suma = suma + i;
    console.log('Suma: ', suma );
}

console.log('----------------');
console.log('Atbulas tekstas');
console.log('----------------');

const tekstas = 'sedek uzu kedes sula'; // apversti teksto simbolius atbulai fedsba
const textoIlgis = tekstas.length - 1;
let atbulas = '';

for ( let i=textoIlgis; i>=0; i--) {
    atbulas = atbulas + tekstas[i];
}

/*
for ( let i=0; i<textoIlgis; i++) {
    atbulas = atbulas + tekstas[ textoIlgis - i - 1 ];
}
*/

console.log(`Tekstas "${tekstas}" atbulai yra "${atbulas}".`);