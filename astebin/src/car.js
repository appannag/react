class Car {
    constructor( color) { 
        this.color = color;
    }
 
    move() {
        return 'car color is'+ this.color+' and car is moving at 120 km/hr';
    }
 
   
}
 
const careObj = new Car("Blue"); 
console.log(careObj.move()); 
 
