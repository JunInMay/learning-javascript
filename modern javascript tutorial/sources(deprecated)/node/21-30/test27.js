function drive() {
  console.log(this.name, "출발!!"); // 에러가 발생하지 않음.
}

drive(); // undefined 출발!! 출력