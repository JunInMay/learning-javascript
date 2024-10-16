/*
2024-10-16 객체의 형 변환 공부 3
*/
let dog = {
  name: "walwale",
};

let cat = {
  name: "yaongE",
  age: 15,
  toString: function() {
    return this;
  }
};

console.log(dog.toString());
console.log(cat.toString() + "test");


