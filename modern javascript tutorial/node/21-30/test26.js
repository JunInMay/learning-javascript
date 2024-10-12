let car = {
  name: "Lamborghini Revuelto",
  speed: 200,
  drive: function() {
    console.log(car.name, "출발!!");
  }
};

let transport = car;
car = null;
transport.drive(); // TypeError: Cannot read properties of null
