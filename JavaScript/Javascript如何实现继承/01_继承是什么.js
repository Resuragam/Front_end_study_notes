 class Car {
    constructor(color, speed) {
        this.color = color
        this.speed = speed
    }
 }

 class Truck extends Car {
    constructor(color,speed) {
        super(color,speed);
        this.Container = true
    }
 }