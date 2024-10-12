let car = {
  name: "Lamborghini Revuelto",
  speed: 200,
};

function drive() {
  console.log("운전!!");
};

car.drive = drive;

car.drive(); // 운전!! 출력
