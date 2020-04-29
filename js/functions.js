"use strict";

/*

function testFunction() {
    return false;
}

console.log( testFunction() );

testFunction();

const filmas = 'Matrix';
console.log( filmas );

const returnas = testFunction();
console.log( returnas );
*/

function daugyba( x, y ) {
    // Validuojama ieinancius duomenis
    if ( typeof(x) !== 'number' ) {
        return console.error('ERROR pirma reiksme turi buti skaicius');
    }
    
    if ( typeof y !== 'number' ) {
        return console.error('ERROR antra reiksme turi buti skaicius');
    }

    if (isNaN(x) === true) {
        return console.error('ERROR pirma isNan reiksme turi buti skaicius');

    }

    if ( ''+y === 'NaN') {
        return console.error('ERROR antra NaN reiksme turi buti skaicius');

    }

    if (isFinite(x) === false) {
        return console.error('ERROR pirma isFinite reiksme turi buti ne begalybe');

    }

    if ( ''+y === 'Infinity') {
        return console.error('ERROR antra Infinite reiksme turi buti ne begalybe');

    }

    // Realizuojame funkcijos logika
    const result = x * y;
    
    // Graziname rezultata
    return result;
}

//console.log( daugyba() );
//console.log( daugyba('laba', 'diena') );
console.log( daugyba(3, 7) );
console.log( daugyba(2, 2, 1154,1156,27,9) );

console.log( daugyba(3, NaN) );

console.log( daugyba(Infinity, -1.5) );
console.log( daugyba(48, Infinity) );
console.log( daugyba(Infinity, Infinity) );

console.log('---------------------');
console.log('Skaitmenu kiekis skaiciuje');
console.log('---------------------');


function skaitmenuKiekisSkaiciuje( number )
{
    //validavimas
    /*
    if ( typeof(number) !== 'number' ||
         isNaN(number) === true || 
         isFinite(number) === false) {
        return console.error('ERROR: reikalingas tikras skaicius');
    }
    */

   if ( typeof(number) !== 'number' ||
        isFinite(number) === false) {
        return console.error('ERROR: reikalingas tikras skaicius');
    }


    // logika
    
    const skaiciusTekstu = ''+number;
    let count = skaiciusTekstu.length;
 

    //jei tekstineje skaiciaus reprezentacijoje yra kablelis, tai count--
    //PVZ, kaip ieskoti su ciklu (siam scenarijuje neverta naudoti)
    /* 
    for ( let i=0; i<skaiciusTekstu.length; i++ ) {
        if ( skaiciusTekstu[i] === '.') {
            count--;
            break;
        }
    }
    */

    if ( number % 1 !== 0) {
        count--;
    }

    // jei neigiamas skaicius, tai count--
    if ( number < 0 ) {
        count--;
    }

    //rezultato grzinimas
    return count;

}

console.log(skaitmenuKiekisSkaiciuje( true ));
console.log(skaitmenuKiekisSkaiciuje( 'asd' ));
console.log(skaitmenuKiekisSkaiciuje( NaN ));
console.log(skaitmenuKiekisSkaiciuje( Infinity ));

console.log(skaitmenuKiekisSkaiciuje( 5 ), '->', 1);
console.log(skaitmenuKiekisSkaiciuje( 781 ), '->', 3);
console.log(skaitmenuKiekisSkaiciuje( 37060123456 ), '->', 11);
console.log(skaitmenuKiekisSkaiciuje( 3.1415 ), '->', 5);
console.log(skaitmenuKiekisSkaiciuje( -12345 ), '->', 5);
console.log(skaitmenuKiekisSkaiciuje( -3.1415 ), '->', 5);

//console.log(skaitmenuKiekisSkaiciuje( 3,1415 ), '->', 5);
