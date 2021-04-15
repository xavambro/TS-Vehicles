"use strict";
var formCar = document.forms[0];
var formWheels = document.forms[1];
var carInfo = document.getElementById('carInfo');
var car;
var cars = [];
function createCar(plate, brand, color) {
    var errors = 0;
    if (!validPlate(plate)) {
        showErrors(document.getElementById("plate"), "errorPlate", "La matrícula ha de tener 4 números y 3 letras consecutivas");
        errors++;
    }
    if (errors == 0) {
        car = new Car(plate, color, brand);
        formCar.className = "d-none";
        formWheels.className = "";
    }
}
function createWheels(wheel1b, wheel1d, wheel2b, wheel2d, wheel3b, wheel3d, wheel4b, wheel4d) {
    var errors = 0;
    var wheels = [];
    var inputs;
    if (!validDiameter(wheel1d)) {
        showErrors(document.getElementById("wheel1Diameter"), "errorWheel1Diameter", "Diàmetro incorrecto, ha de ser entre 0.4 y 2");
        errors++;
    }
    if (!validDiameter(wheel2d)) {
        showErrors(document.getElementById("wheel2Diameter"), "errorWheel2Diameter", "Diàmetro incorrecto, ha de ser entre 0.4 y 2");
        errors++;
    }
    if (!validDiameter(wheel3d)) {
        showErrors(document.getElementById("wheel3Diameter"), "errorWheel3Diameter", "Diàmetro incorrecto, ha de ser entre 0.4 y 2");
        errors++;
    }
    if (!validDiameter(wheel4d)) {
        showErrors(document.getElementById("wheel4Diameter"), "errorWheel4Diameter", "Diàmetro incorrecto, ha de ser entre 0.4 y 2");
        errors++;
    }
    if (errors == 0) {
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
        cars.push(car);
        inputs = document.getElementsByTagName("input");
        formCar.className = "";
        formWheels.className = "d-none";
        //Reseteamos los valores de los inputs
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        showCar(car);
    }
}
function showCar(car) {
    var statsList = document.createElement('ul');
    var plate = document.createElement('li');
    plate.textContent = "CAR PLATE: " + car.plate;
    var brand = document.createElement('li');
    brand.textContent = "CAR BRAND: " + car.brand;
    var color = document.createElement('li');
    color.textContent = "CAR COLOR: " + car.color;
    var wheels = document.createElement('ul');
    car.wheels.forEach(function (wheel, index) {
        var li = document.createElement('li');
        li.textContent = "WHEEL " + index + " BRAND: " + wheel.brand + " WHEEL DIAMETER: " + wheel.diameter;
        wheels.appendChild(li);
    });
    var carImg = document.createElement('i');
    carImg.className = "fas fa-car fa-5x";
    carImg.style.color = car.color;
    statsList.append(plate, brand, color, wheels, carImg);
    carInfo.appendChild(statsList);
}
//Función para mostrar error a la hora de validar los campos
function showErrors(input, error, message) {
    input.classList.add("is-invalid");
    var errorDiv = document.getElementById(error);
    if (errorDiv != null) {
        errorDiv.textContent = message;
    }
}
function validDiameter(num) {
    if (num >= 0.4 && num <= 2) {
        return true;
    }
    else {
        return false;
    }
}
function validPlate(plate) {
    var regex = /^[\d]{4}[A-Za-z]{3}$/;
    return regex.test(plate) ? true : false;
}
