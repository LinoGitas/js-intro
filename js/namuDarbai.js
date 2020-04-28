console.log( '----------------- NAMU DARBAS 1 ---------------------' );

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
console.log('Rezultatas: ', dayResult);