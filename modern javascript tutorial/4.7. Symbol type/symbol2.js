/* 2024-10-12 심볼 공부 2 */

let mySymbol = Symbol("id");

let obj1 = {
  [mySymbol]: 10,
  mySymbol: 20,
};

console.log(obj1.mySymbol); // 20
console.log(obj1[mySymbol]); // 10
console.log(obj1["mySymbol"]); // 20

let nameSymbol = Symbol("name");

obj1[nameSymbol] = "james";
console.log(obj1[nameSymbol]); // james
console.log(obj1.nameSymbol); // undefined

obj1.nameSymbol = "john";
console.log(obj1[nameSymbol]); // james
console.log(obj1.nameSymbol); // john

console.log("---------------------");

for (key in obj1) {
  console.log(key, obj1[key]);
}


