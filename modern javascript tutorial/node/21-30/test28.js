function drive() {
  console.log(this.name, "출발!!"); // 에러가 발생하지 않음.
}

let car1 = {
  name: "Lamborghini Revuelto",
  speed: 200,
}

let car2 = {
  name: "Lamborghini Aventador",
  speed: 180,
}

car1.drive = drive;
car2.drive = drive;

car1.drive(); // this = "Revuelto"
car2.drive(); // this = "Aventador"
