/*
2024-10-14 객체의 형 변환 공부 1
*/
let obj1 = {
  age: 30,
  [Symbol.toPrimitive]: function(hint) {
    return hint == "string" ? `{age: "${this.age}"}` : this.age;
  }
};
let obj2 = {
  age: 20,
  [Symbol.toPrimitive]: function(hint) {
    return hint == "string" ? `{age: "${this.age}"}` : this.age;
  }
};
let obj3 = {
  age: 20,
};

console.log(obj1 > obj2);
console.log(obj1 == obj3);
