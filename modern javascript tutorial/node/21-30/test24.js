let car = {
  name: "Lamborghini Revuelto",
  speed: 200,
  drive: function() {
    console.log(this.name, "출발!!");
  }
};

car.drive(); // Lamborghini Revuelto 출발!! 출력
