/*
2024-10-17 객체의 형 변환 공부 16
*/
let obj = {
  name: "myLove",
  age: 20,
};

console.log(obj, 3); // hint : default, {name: 'myLove', age: 20}

let a = new Number(40); // 인스턴스를 만듦

console.log(a); // Number (40)
console.log(a.valueOf()); // 40