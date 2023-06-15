"use strict";
// namespace AlpenFlug {
//     export class People {
//         position: Vector;
//         speed: Vector;
//         constructor(_position: Vector, _speed: Vector) {
//             this.position = _position;
//             this.speed = _speed;
//         }
//         drawPeople() {
//             let minX: number = 200;
//             let maxX: number = 700;
//             let positionx=Math.floor(this.position.x * (maxX - minX + 1))+ minX
//             let minY: number = 600;
//             let maxY: number = 700;
//             let positiony=Math.floor(this.position.y * (maxY - minY + 1))+ minY
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony);
//             crc2.arc(positionx, positiony, 8, 0, 2 * Math.PI);
//             crc2.stroke();
//             crc2.fillStyle = "white";
//             crc2.fill();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony + 8);
//             crc2.lineTo(positionx, positiony + 20)
//             crc2.moveTo(positionx, positiony + 20);
//             crc2.lineTo(positionx - 10, positiony + 30);
//             crc2.moveTo(positionx, positiony + 20);
//             crc2.lineTo(positionx + 10, positiony + 30);
//             crc2.stroke();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony + 15);
//             crc2.lineTo(positionx - 20, positiony);
//             crc2.moveTo(positionx, positiony + 15);
//             crc2.lineTo(positionx + 20, positiony);
//             crc2.stroke();
//             crc2.closePath();
//         };
//         movement(_timeslice: number): boolean {
//             let offset: Vector = new Vector(this.speed.x, this.speed.y);
//             offset.scale(_timeslice);
//             this.position.subtract(offset); //subtrahiert von position den offset
//             let change=false
//             if (this.position.y < 200*0.001 && this.position.x<350*0.001 ){
//                 change=true
//             }
//             if (this.position.y < 200*0.001  && this.position.x>350*0.001 ){
//                 this.position.y =900*0.001 ;
//                 change=false
//             }
//             if(this.position.x<0){
//                 change=true
//             }
//             return change
//         };
//     }
//     export class Parachutist extends People {
//         drawParachutes() {
//             let minX: number = 200;
//             let maxX: number = 1000;
//             let positionx: number = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
//             let minY: number = 100;
//             let maxY: number = 500;
//             let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
//             // Seile
//             crc2.beginPath();
//             crc2.moveTo(positionx - 3, positiony + 10);
//             crc2.lineTo(positionx - 25, positiony - 20);
//             crc2.stroke();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx + 3, positiony + 10);
//             crc2.lineTo(positionx + 25, positiony - 20);
//             crc2.stroke();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx + 3, positiony + 10);
//             crc2.lineTo(positionx + 10, positiony - 20);
//             crc2.stroke();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx - 3, positiony + 10);
//             crc2.lineTo(positionx - 10, positiony - 20);
//             crc2.stroke();
//             crc2.closePath();
//             //Schirm
//             crc2.beginPath();
//             crc2.moveTo(positionx - 25, positiony - 20)
//             crc2.bezierCurveTo(positionx - 10, positiony - 20, positionx + 10, positiony - 20, positionx + 25, positiony - 20);
//             crc2.fill();
//             crc2.fillStyle = "HSL(39,100%,50%)";
//             crc2.stroke();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.arc(positionx, positiony - 20, 25, Math.PI, 2 * Math.PI)
//             crc2.lineTo(positionx - 25, positiony - 20);
//             crc2.fill();
//             crc2.stroke();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony);
//             crc2.arc(positionx, positiony, 8, 0, 2 * Math.PI);
//             crc2.stroke();
//             crc2.fillStyle = "white";
//             crc2.fill();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony + 8);
//             crc2.lineTo(positionx, positiony + 20)
//             crc2.moveTo(positionx, positiony + 20);
//             crc2.lineTo(positionx - 10, positiony + 30);
//             crc2.moveTo(positionx, positiony + 20);
//             crc2.lineTo(positionx + 10, positiony + 30);
//             crc2.stroke();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony + 15);
//             crc2.lineTo(positionx - 20, positiony);
//             crc2.moveTo(positionx, positiony + 15);
//             crc2.lineTo(positionx + 20, positiony);
//             crc2.stroke();
//             crc2.closePath();
//         }
//         movement_parachute(_timeslice: number): boolean {
//             let offset: Vector = new Vector(this.speed.x, this.speed.y);
//             offset.scale(_timeslice);
//             this.position.add(offset); //addiert auf position den offset
//             let change=false
//             // if (this.position.x < 0){
//             //     this.position.x += crc2.canvas.width;
//             // }
//             // if (this.position.y < 0){
//             //     this.position.y += crc2.canvas.height;
//             // }
//             if (this.position.x > crc2.canvas.width*0.001)
//             {
//                 this.position.x -= crc2.canvas.width*0.001;
//                 change=false;
//             }
//             if (this.position.y > crc2.canvas.height*0.001){
//                 change=true;
//             }
//             return change
//         };
//     }
//     let minY: number = 400;
//     let maxY: number = 600;
//     let positiony: number = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
//     export class Climber extends People {
//         drawClimber() {
//             let minX: number = 5;
//             let maxX: number = 100;
//             let positionx: number = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
//             let climbers: [] = [];
//             let isUnique: boolean;
//             do {
//                 isUnique = true;
//                 positionx = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
//                 positiony = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
//                 for (let i = 0; i < climbers.length; i++) {
//                     let existingClimber = climbers[i];
//                     let distance = Math.sqrt((existingClimber - positionx) ** 2 + (existingClimber - positiony) ** 2);
//                     if (distance < 20) {
//                         isUnique = false;
//                         break;
//                     }
//                 }
//             } while (!isUnique);
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony);
//             crc2.arc(positionx, positiony, 8, 0, 2 * Math.PI);
//             crc2.stroke();
//             crc2.fillStyle = "white";
//             crc2.fill();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony + 8);
//             crc2.lineTo(positionx, positiony + 20)
//             crc2.moveTo(positionx, positiony + 20);
//             crc2.lineTo(positionx - 10, positiony + 30);
//             crc2.moveTo(positionx, positiony + 20);
//             crc2.lineTo(positionx + 10, positiony + 30);
//             crc2.stroke();
//             crc2.closePath();
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony + 15);
//             crc2.lineTo(positionx - 20, positiony);
//             crc2.moveTo(positionx, positiony + 15);
//             crc2.lineTo(positionx + 20, positiony);
//             crc2.stroke();
//             crc2.closePath();
//             //Rucksack
//             crc2.beginPath();
//             crc2.moveTo(positionx, positiony+10);
//             crc2.lineTo(positionx+8,positiony+10);
//             crc2.lineTo(positionx+8,positiony+20);
//             crc2.lineTo(positionx-8,positiony+20);
//             crc2.lineTo(positionx-8,positiony+10);
//             crc2.fillStyle="red";
//             crc2.fill();
//             crc2.closePath();
//         };
//         movement_climber(_timeslice: number): boolean {
//             let offset: Vector = new Vector(this.speed.x, this.speed.y);
//             offset.scale(_timeslice);
//             this.position.subtract_climb(offset); //addiert auf position den offset
//             let change=false
//             // if (this.position.x < 0){
//             //     this.position.x += crc2.canvas.width;
//             // }
//             // if (this.position.y < 0){
//             //     this.position.y += crc2.canvas.height;
//             // }
//             if (this.position.x < crc2.canvas.width*0.001)
//             {
//                 this.position.x += crc2.canvas.width*0.001;
//                 change=false;
//             }
//             if (this.position.y < 50*0.001){
//                 change=true;
//             }
//             return change
//         };
//     }
// }
//# sourceMappingURL=guys.js.map