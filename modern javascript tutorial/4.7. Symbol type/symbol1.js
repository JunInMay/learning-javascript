/* 2024-10-12 심볼 공부 */

let myFirstSymbol = Symbol("id");
let mySecondSymbol = Symbol("id");

let obj1 = {};
let obj2 = {};

console.log(myFirstSymbol == mySecondSymbol); // false

obj1.myFirstSymbol = 1;
obj2.myFirstSymbol = 2;

console.log(obj1["id"]); // undefined
console.log(obj1.id); // undefined

console.log(myFirstSymbol); // Symbol(id)
console.log(mySecondSymbol); // Symbol(id)

obj1["Symbol(id)"] = 20;

console.log(obj1[myFirstSymbol]); // undefined
console.log(obj1.myFirstSymbol); // 1
console.log(obj1[myFirstSymbol]); // undefined
console.log(obj1[mySecondSymbol]); // undefined

obj1["myFirstSymbol"] = 2;

console.log(obj1.myFirstSymbol);
console.log(obj1[myFirstSymbol]);





