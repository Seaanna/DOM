
var car;

function createCar(make, model, year, color) {
  var speed = 0;
  return {
    carMaker: make,
    carModel: model,
    carYear: year,
    carColor: color,
    getSpeed: function(){document.getElementById("outPut").innerHTML=speed;
    },
    accelerate: function(){
        while(speed<85){
            (speed = speed +1);
            document.getElementById("outPut3").innerHTML+= " " +speed;
        }      
    },
    brake: function(){
        while(speed>0){
            (speed = speed -1);
            document.getElementById("outPut").innerHTML=speed;
            //$('#output').html(speed);
        } 
    },
    rollerCoaster: function(){
        while(speed<70){
            (speed = speed + 1);
            document.getElementById("outPut").innerHTML=speed;
        } 
        while(speed>0){
            (speed = speed -1);
            document.getElementById("outPut").innerHTML=speed;
        } 
    },
    breakDownHill: function(){
        while(speed>0){
            (speed=speed - (Math.floor((Math.random()*(speed/2))+1)));
            document.getElementById("outPut2").innerHTML+= " " + speed;
        }
    },
    getData: function() {document.getElementById("outPut").innerHTML= this.carMaker+" "+ this.carModel+" "+this.carYear+" "+this.carColor;},
  };
}




function getCarVars() {
  car = createCar(document.getElementById("carMake").value,
  document.getElementById("carModel").value,
  document.getElementById("carYear").value,
  document.getElementById("carColor").value);

  car.getData();
}

function goFast (){
  car = createCar(document.getElementById("carMake").value,
  document.getElementById("carModel").value,
  document.getElementById("carYear").value,
  document.getElementById("carColor").value);

  car.accelerate();
}


function failBreak (){
  car.breakDownHill();
}
