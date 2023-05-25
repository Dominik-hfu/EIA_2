namespace AlpenFlug{
    
    export class Bumblebee{

    type:string;
    positionX:number;
    positionY:number;
    sizeX:number;
    sizeY:number;
    color:string;
    movement:number;

    constructor(_type:string, _position: Array<number>, _size: Array<number>, _color: string, _movement:number){
        
        this.type=_type;
        this.positionX=_position[0];
        this.positionY=_position[1];
        this.sizeX=_size[0];
        this.sizeY=_size[1];
        this.color=_color;
        this.movement=_movement;

    }

}
}