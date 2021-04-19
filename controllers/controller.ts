let formCar: HTMLFormElement = document.forms[0];
let formWheels: HTMLFormElement = document.forms[1];
let carInfo:any = document.getElementById('carInfo');
let plateElement = document.getElementById("plate")
let car:Car;
let cars: Car[] = [];


function createCar(plate:string,brand:string,color:string):void {
    let errors:number = 0;

    if(!validPlate(plate)){
        showErrors(plateElement,"errorPlate","Ha de tener 4 números y 3 letras consecutivas");
        errors++;
    }

    if(errors ==0){
        car=new Car(plate,color,brand);
        formCar.className = "d-none";
        formWheels.className = ""; 
        if (plateElement != null){
            plateElement.className = "form-control form-control-sm";
        }
    }
    
}

function createWheels(wheel1b:string,wheel1d:number,wheel2b:string,wheel2d:number,wheel3b:string,wheel3d:number,wheel4b:string,wheel4d:number):void {
    let errors:number =0;
    let wheels: Wheel[] = [];
    let inputs: HTMLCollectionOf<HTMLInputElement>;

    if(!validDiameter(wheel1d)){
        showErrors(document.getElementById("wheel1Diameter"),"errorWheel1Diameter","Diàmetro incorrecto, ha de ser entre 0.4 y 2");
        errors++;
    }
    if(!validDiameter(wheel2d)){
        showErrors(document.getElementById("wheel2Diameter"),"errorWheel2Diameter","Diàmetro incorrecto, ha de ser entre 0.4 y 2");
        errors++;    
    }
    if(!validDiameter(wheel3d)){
        showErrors(document.getElementById("wheel3Diameter"),"errorWheel3Diameter","Diàmetro incorrecto, ha de ser entre 0.4 y 2");
        errors++;   
    }
    if(!validDiameter(wheel4d)){
        showErrors(document.getElementById("wheel4Diameter"),"errorWheel4Diameter","Diàmetro incorrecto, ha de ser entre 0.4 y 2");
        errors++;    
    }

    if(errors == 0){
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
        cars.push(car);
        inputs = document.getElementsByTagName("input");
        //Reseteamos los valores de los inputs
        for (let i =0; i < inputs.length; i++){
            inputs[i].value = ''
        }
        
        formCar.className = "";
        formWheels.className = "d-none";
        showCar(car);

    }
    
}

function showCar(car:Car):void{

    let statsList = document.createElement('ul');
    statsList.className = "car border border-success rounded"
    let plate = document.createElement('li');
    plate.textContent = `CAR PLATE: ${car.plate}`;
    let brand = document.createElement('li');
    brand.textContent = `CAR BRAND: ${car.brand}`;
    let color = document.createElement('li');
    color.textContent = `CAR COLOR: ${car.color}`;
    let wheels = document.createElement('ul');
    wheels.textContent = "WHEELS:"
    car.wheels.forEach(function(wheel,index:number) {
        let li = document.createElement('li');
        li.textContent = `WHEEL ${index} BRAND: ${wheel.brand} WHEEL DIAMETER: ${wheel.diameter}`;
        wheels.appendChild(li);
    })

    let carImg = document.createElement('i');
    carImg.className = "fas fa-car fa-5x";
    carImg.style.color = car.color; 
    statsList.append(plate,brand,color,wheels,carImg);
    carInfo.appendChild(statsList);
    
}

//Función para mostrar error a la hora de validar los campos
function showErrors(input:any,error:string,message:string):void{

    input.classList.add("is-invalid");
	let errorDiv = document.getElementById(error);
    if (errorDiv != null){
        errorDiv.textContent = message;
    }
}

function validDiameter(num:number): boolean{
    if(num >= 0.4 && num <=2){
        return true;
    }else{
        return false;
    }
}

function validPlate(plate:string): boolean{
    var regex = /^[\d]{4}[A-Za-z]{3}$/;
	return regex.test(plate) ? true : false;
}

