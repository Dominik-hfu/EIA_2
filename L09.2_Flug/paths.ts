namespace AlpenFlug{

   // keine Klasse?



    // Pfad müsste bei mir Type sein? Mit oder ohne Schirm/ Rucksack



        export let parachutistPaths: Path2D[];

    //     export let shapesParachutists: number[][][]=[
    //         [
    //     [x,y],[x,y]
    //     ]

       
    //     ]
    
    //  Pfad Koordinaten der Flieger ???


    export function createPaths():void {
        parachutistPaths=createParachutistsPath(shapesParachutist);

    }

    function createParachutistsPath(_shapes:number[][][]):Path2D[]{//shape brauche ich nicht?
        let paths: Path2D[]=[];
        for(let type of _shapes){
            let path:Path2D= new Path2D();
            let first: boolean= true;

            for(let coordinates of type){
                if(first)
                path.moveTo(coordinates[0],coordinates[1]);
                else
                path.lineTo(coordinates[0],coordinates[1]);
                first=false;
            
            }
            path.closePath();
            paths.push(path);
            
        }
        return paths;
    }
}