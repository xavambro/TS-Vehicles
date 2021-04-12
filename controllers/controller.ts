let formCar: HTMLFormElement = document.forms[0];
let formWheels: HTMLFormElement = document.forms[1];
let carInfo:any = document.getElementById('carInfo');
let car:Car

function createCar(plate:string,brand:string,color:string):void {
    
    car=new Car(plate,color,brand);
    formCar.className = "d-none";
    formWheels.className = "";
    /* car.addWheel(new Wheel(2,"SEAT"));
    carInfo.textContent="CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels); */
}
function createWheels(wheel1b:string,wheel1d:number,wheel2b:string,wheel2d:number,wheel3b:string,wheel3d:number,wheel4b:string,wheel4d:number):void {
    let wheels: Wheel[] = [];
    let wheel1: Wheel = new Wheel(wheel1d,wheel1b);
    wheels.push(wheel1);
    let wheel2: Wheel = new Wheel(wheel2d,wheel2b);
    wheels.push(wheel2);
    let wheel3: Wheel = new Wheel(wheel3d,wheel3b);
    wheels.push(wheel3);
    let wheel4: Wheel = new Wheel(wheel4d,wheel4b);
    wheels.push(wheel4);
    for (let i:number = 0;i < wheels.length;i++){
        car.addWheel(wheels[i]);
    }

    carInfo.textContent="CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + car.brand 
    + " WHEELS: " + JSON.stringify(car.wheels); 
    
}


