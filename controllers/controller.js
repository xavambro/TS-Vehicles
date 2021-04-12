"use strict";
var formCar = document.forms[0];
var formWheels = document.forms[1];
var carInfo = document.getElementById('carInfo');
var car;
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
    formCar.className = "d-none";
    formWheels.className = "";
    /* car.addWheel(new Wheel(2,"SEAT"));
    carInfo.textContent="CAR: PLATE: " + car.plate
    + " COLOR: " +car.color + " BRAND: " + brand
    + " WHEELS: " + JSON.stringify(car.wheels); */
}
function createWheels(wheel1b, wheel1d, wheel2b, wheel2d, wheel3b, wheel3d, wheel4b, wheel4d) {
    var wheels = [];
    var wheel1 = new Wheel(wheel1d, wheel1b);
    wheels.push(wheel1);
    var wheel2 = new Wheel(wheel2d, wheel2b);
    wheels.push(wheel2);
    var wheel3 = new Wheel(wheel3d, wheel3b);
    wheels.push(wheel3);
    var wheel4 = new Wheel(wheel4d, wheel4b);
    wheels.push(wheel4);
    for (var i = 0; i < wheels.length; i++) {
        car.addWheel(wheels[i]);
    }
    carInfo.textContent = "CAR: PLATE: " + car.plate
        + " COLOR: " + car.color + " BRAND: " + car.brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}
