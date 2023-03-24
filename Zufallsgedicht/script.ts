namespace poem {

    let subjekt: string[] = [' Homer ', ' Marge ', ' Bart ', ' Lisa ']
    let praedikat: string[] = [' isst ', ' kocht ', ' fährt ', ' spielt ']
    let objekt: string[] = [' Donuts ', ' Truthan ', ' Skateboard ', ' Saxophon ']

    for (let i:number = subjekt.length; i--; i < 0) {

        let x: number = Math.floor(Math.random() * subjekt.length);
        let y: number = Math.floor(Math.random() * praedikat.length);
        let z: number = Math.floor(Math.random() * objekt.length);

        getVerse(subjekt, praedikat, objekt, x, y, z);

    }

    function getVerse(_subjekt: string[], _praedikat: string[], _objekt: string[], _x: number, _y: number, _z: number) {

        let verse: string = ''

        let randomSubjekt: string[] = subjekt.splice(_x, 1)
        let randomPraedikat: string[] = praedikat.splice(_y, 1)
        let randomObjekt: string[] = objekt.splice(_z, 1)

        verse += randomSubjekt[0] + '' + randomPraedikat[0] + '' + randomObjekt[0] + '.';
        console.log(verse)

    }

}
