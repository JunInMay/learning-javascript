/*
2024-10-17
 객체의 형 변환 공부 18
*/
let obj = {
  name: "100",
  age: 20,
  toString: function() {
    return this.name;
  },
};

console.log(obj * 3);
console.log(obj + 2);