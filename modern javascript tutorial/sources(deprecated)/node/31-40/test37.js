function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}

let myCar = new Car("Lamborghini", 300);
console.log("name : ", myCar.name);
console.log("speed : ", myCar.speed);