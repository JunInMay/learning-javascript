/*
2024-10-16 객체의 형 변환 공부 2
*/
let obj = {
  age: 30,
  name: "name",
  [Symbol.toPrimitive]: function(hint) {
    return hint == "string" ? this.name : this.age;
  }
};

let temp = {
  name: "James"
};

console.log(obj + 1); // 31
console.log(temp[obj]); // James

