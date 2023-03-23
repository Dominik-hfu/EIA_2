namespace poem {

    let subjekt: string[] = [' Homer ', ' Marge ', ' Bart ', ' Lisa ']
    let praedikat: string[] = [' isst ', ' kocht ', ' fährt ', ' spielt ']
    let objekt: string[] = [' Donuts ', ' Truthan ', ' Skateboard ', ' Saxophon ']

    for (let i = subjekt.length; i--; i < 0) {

        let x: number = Math.floor(Math.random() * subjekt.length);
        let y: number = Math.floor(Math.random() * praedikat.length);
        let z: number = Math.floor(Math.random() * objekt.length);

        getVerse(subjekt, praedikat, objekt, x, y, z);

    }

    function getVerse(subjekt: string[], praedikat: string[], objekt: string[], x: number, y: number, z: number) {

        let verse: string = ''

        let randomSubjekt: string[] = subjekt.splice(x, 1)
        let randomPraedikat: string[] = praedikat.splice(y, 1)
        let randomObjekt: string[] = objekt.splice(z, 1)

        verse += randomSubjekt[0] + '' + randomPraedikat[0] + '' + randomObjekt[0] + '.';
        console.log(verse)

    }

}
