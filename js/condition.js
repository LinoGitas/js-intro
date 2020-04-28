"use strict";

const a = 7;
const b = 9;

/*
palyginimo operatoriai:
rekomenduotina:
> 
< 
<= 
>=
!==
===
nerekomenduotina:
==
!=


if ( salyga ) {
    logika kuria reikia ivykdyti, jei tenkinama salyga
}

*/

/*
if ( a > b ) {
    console.log('taip a yra daugiau uz b');
} else {
    console.log('ne a yra ne daugiau uz b');
}
*/

if ( a > b ) {
    console.log('taip a yra daugiau uz b');
} else if ( a === b) {
    console.log('a yra lygu b');
} else {
    console.log('ne a yra ne daugiau uz b');
}

let diena = 1;

if (diena === 0) {
    console.log('pirmadienis');
} else if (diena === 1) {
    console.log('antradienis');
} else if (diena === 2) {
    console.log('treciadienis');
} else if (diena === 3) {
    console.log('ketvirtadienis');
} else if (diena === 4) {
    console.log('penktadienis');
} else if (diena === 5) {
    console.log('sestadienis');
} else if (diena === 6) {
    console.log('sekmadienis');
}
else {
    console.log('tokia diena neegzistuoja!');
}

const vardas = 'vardas';

if ( vardas === 'Vardas' ) {
    console.log('All Good!');
} else {
    console.log('Not fun...');
}

console.log('------------------------------');

if ( 0 === false ) { // jei 0 su false tikrinam grieztai nernda, tikrinant == randa!
    console.log('All Good!');
} else {
    console.log('Not fun...');
}

// jei nori be nesusipratimu naudoti ===, !==

console.log('------------------------------');

const akys = 'melyna';

//switch'as

switch ( akys ) { // retai naudotinas labai ribotas
    case 'ruda':
        console.log('melagis');
        break;
    
    case 'raudona':
        console.log('vampyras');
        break;

    case 'melyna':
        console.log('mldc');
        break;

    case 'zalia':
        console.log('dar nevirti');
        break;
    default:
        console.log('bla bla bla');
        break;
}

// nesting'as

if ( akys === 'rudos' ) {
    console.log('Melagis');
} else {
    if ( akys === 'melynos' ) {
        console.log('mldc');
    }
    else {
        if ( akys === 'raudonos' ) {
            console.log('vampyras');
        } else {
            console.log('belekas');
        }
    }
}

// nesting'o, vengti!!! kaip ir switch'o