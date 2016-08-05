
var x;

function createCar(make, model, year, color) {
  // var speed = 0;
  return {
    carMaker: make,
    carModel: model,
    carYear: year,
    carColor: color,
    // getSpeed: function() {return speed;},
    // accelerate: function() {
    //   if (speed >= 76) {
    //       speed = 85;
    //     } else {
    //   speed = speed + 10;}
    // },
    // brake: function() {
    //   if (speed <=7){
    //     speed = 0;}
    //   else {
    //   speed = speed - 7;}
    //   },
    // failedBrake: function(){
    //   var slow = getRandom(0, Math.floor(speed/2));
    //   speed = speed - slow;
    // },
    getData: function() {document.getElementById("outPut").innerHTML= this.carMaker+" "+ this.carModel+" "+this.carYear+" "+this.carColor;},
    // accelerateTo50: function(){
    //   while (speed < 50){
    //     this.accelerate();
    //   }
    // },
    // stop: function(){
    //   while (speed > 6){
    //     this.brake();
    //   }
    //   while (speed > 0){
    //     speed--;
    //   }
    // }
  };
}



function getCarVars() {
  x = createCar(document.getElementById("carMake").value,
  document.getElementById("carModel").value,
  document.getElementById("carYear").value,
  document.getElementById("carColor").value);

 (x.getData());
}
