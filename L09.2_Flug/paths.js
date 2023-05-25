"use strict";
var AlpenFlug;
(function (AlpenFlug) {
    // keine Klasse?
    //     export let shapesParachutists: number[][][]=[
    //         [
    //     [x,y],[x,y]
    //     ]
    //     ]
    //  Pfad Koordinaten der Flieger ???
    function createPaths() {
        AlpenFlug.parachutistPaths = createParachutistsPath(shapesParachutist);
    }
    AlpenFlug.createPaths = createPaths;
    function createParachutistsPath(_shapes) {
        let paths = [];
        for (let type of _shapes) {
            let path = new Path2D();
            let first = true;
            for (let coordinates of type) {
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=paths.js.map