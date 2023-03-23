"use strict";
var poem;
(function (poem) {
    let subjekt = [' Homer ', ' Marge ', ' Bart ', ' Lisa '];
    let praedikat = [' isst ', ' kocht ', ' fährt ', ' spielt '];
    let objekt = [' Donuts ', ' Truthan ', ' Skateboard ', ' Saxophon '];
    for (let i = subjekt.length; i--; i < 0) {
        let x = Math.floor(Math.random() * subjekt.length);
        let y = Math.floor(Math.random() * praedikat.length);
        let z = Math.floor(Math.random() * objekt.length);
        getVerse(subjekt, praedikat, objekt, x, y, z);
    }
    function getVerse(subjekt, praedikat, objekt, x, y, z) {
        let verse = '';
        let randomSubjekt = subjekt.splice(x, 1);
        let randomPraedikat = praedikat.splice(y, 1);
        let randomObjekt = objekt.splice(z, 1);
        verse += randomSubjekt[0] + '' + randomPraedikat[0] + '' + randomObjekt[0] + '.';
        console.log(verse);
    }
})(poem || (poem = {}));
//# sourceMappingURL=script.js.map