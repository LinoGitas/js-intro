"use strict";

// Matematines operacijos (pirma daugyba dalyba)
const sk1 = 27;
const sk2 = 3;

const suma = sk1 + sk2;
console.log( suma );

const skirtumas = sk1 - sk2;
console.log( skirtumas );

const sandauga = sk1 * sk2;
console.log( sandauga );

const dalmuo = sk1 / sk2;
console.log( dalmuo );

console.log( suma - skirtumas * (sandauga + sk2) );

console.log( '-------------------------' );

// Tekstines operacijos
const vardas = 'Vardenis';
const pavarde = 'Pavardenis';
const pilnasVardas = vardas + ' ' + pavarde;

console.log( vardas );
console.log( pavarde );
console.log( pilnasVardas );

// mano megstama spalva yra "juoda". (jei tekste dvigubos kabutes pradeti viengubomis!!!)
const spalva = 'raudona';
const spalvosSakinys = 'Mano megstama spalva yra "' + spalva + '".';
console.log( spalvosSakinys );

// Skaicius '20' yra lyginis. (jei tekste viengubos kabutes pradeti dvigubomis!!!)
const skaicius = 20;
const skaiciausSakinys = "Skaicius '" + skaicius + "' yra lyginis.";
console.log( skaiciausSakinys );

// Skaicius '2' ir skaicius "trys" yra geri skaiciai.
const du = 2;
const trys = 'trys';
const sakinys = `Skaicius '${du}' ir skaicius "${trys}" yra geri skaiciai.`;
console.log( sakinys );

const vienas = 1;
const keturi = 'keturi';
const sakinys2 = 'Skaicius \'' +vienas + '\' ir skaicius "' + keturi+ '" yra geri skaiciai.';
console.log( sakinys2 );

//Srasu operacijos (array)
const pazymiai = [10, 8, 7, 6, 4, 8];
const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log( pazymiai );
console.log( abc );

console.log( 'Pirmas pazymys', pazymiai[0] );
/*
console.log( 'Antras pazymys', pazymiai[1] );
console.log( 'Trecias pazymys', pazymiai[2] );
console.log( 'Ketvirtas pazymys', pazymiai[3] );
console.log( 'Penktas pazymys', pazymiai[4] );
console.log( 'Sestas pazymys', pazymiai[5] );
*/

console.log( 'Pirma raide', abc[0] );
/*
console.log( 'Antra raide', abc[1] );
console.log( 'Trecia raide', abc[2] );
console.log( 'Ketvirta raide', abc[3] );
console.log( 'Penkta raide', abc[4] );
console.log( 'Sesta raide', abc[5] );
*/

const pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4] + pazymiai[5];
console.log( 'Pazymiu suma:', pazymiuSuma );

let abcSakinys = '';
abcSakinys = abcSakinys +abc[0];
abcSakinys = abcSakinys +abc[1];
abcSakinys = abcSakinys +abc[2];
abcSakinys = abcSakinys +abc[3];
abcSakinys = abcSakinys +abc[4];
abcSakinys = abcSakinys +abc[5];
console.log( 'Visa abc:', abcSakinys );

console.log( pazymiai[3.141529654] );