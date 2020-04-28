"use strict";

console.log( 'NAMU DARBAS 1' );
console.log('-------------------------------------------');
console.log('Susumuoti visus skaičiaus tipo kintamuosius');
console.log('-------------------------------------------');

const num1 = 10;
const num2 = 20;
const num3 = 30;
const numResult = num1 + num2 + num3;
console.log( 'Rezultatas:', numResult);

console.log('-------------------------------------------------------------------------------');
console.log('Sujungti visus teksto tipo kintamuosius taip, jog tarp ju būtų sudarytas tarpas');
console.log('-------------------------------------------------------------------------------');

const brand = 'Toyota';
const model = 'Yaris';
const property = 'Cross compact SUV';

const constA = brand + ' ' + model + ' ' + property + '.';
const constB = brand + ' ' + '"' + model + '"' + ' ' + "'" + property + "'.";
console.log( 'Rezultatas A: ', constA + ' ' + constB );

const constC = `${brand} ${model} ${property}.`;
const constD = `${brand} "${model}" '${property}'.`;
console.log( 'Rezultatas B: ', `${constC} ${constD}` );


console.log('---------------------------------------------------------------------------------------------');
console.log('Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5');
console.log('---------------------------------------------------------------------------------------------');

const listA = [10 ,20 ,30 ,40 ,50];
const listB = [100 ,70 ,80 ,90 ,100];

const resultListA = listA[0] - listA[1] + listA[2] - listA[3] + listA[4];
const resultListB = listB[0] - listB[1] + listB[2] - listB[3] + listB[4];
console.log( 'Rezultatas A:', resultListA, 'Rezultatas B:', resultListB);


console.log('-----------------------------------------------------------------------------------------------------------------------');
console.log('Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas');
console.log('-----------------------------------------------------------------------------------------------------------------------');

const dayA = ['Pirmadienis', 'Antradienis', 'Treciadienis'];
const dayB = ['Ketvirtadienis', 'Penktadienis', 'Sestadienis', 'Sekmadienis'];

let dayResult = dayB[3] + ', ' + dayB[2] + ', ' + dayB[1] + ', ' +dayB[0];
dayResult = dayResult + ', ' + dayA[2] + ', ' + dayA[1] + ', ' +dayA[0];
console.log('Rezultatas A: ', dayResult);

let dayResultB = `${dayB[3]}, ${dayB[2]}, ${dayB[1]}, ${dayB[0]}`;
dayResultB = `${dayResultB}, ${dayA[2]}, ${dayA[1]}, ${dayA[0]}`;
console.log('Rezultatas B: ', dayResultB);

console.log('------------------------------------------------------------------------------------------------------');
console.log( 'NAMU DARBAS 2');
console.log('------------------------------------------------------------------------------------------------------');
console.log('Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:');
console.log('a. 0 - 11');
console.log('b. 8 - 31');
console.log('c. -18 - 18');
console.log('d. rezultatą pateikti tokiu formatu:');
console.log('   1. Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 3 yra 4 vienetai.');
console.log('   2. Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 5 yra 3 vienetai.');
console.log('   3. Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 7 yra 2 vienetai.');
console.log('------------------------------------------------------------------------------------------------------');


const from = 8; // 0, 8,  -18
const to = 31;  // 11,  31, 18
const division = 3; // 3, 5, 7

let count = 0;
let result = '';

for (let i=from; i<=to; i++) {
    if (i %division == 0) {
        count++;
        result += i + ',';
    }
}

result = result.slice(0,-1);

//console.log(i, '->', i %division);
console.log(`Skaičių intervale tarp ${from} ir ${to}, besidalinančių be liekanos iš ${division} yra ${count} vienetai (Skaiciai be liekanos: ${result}).`);

