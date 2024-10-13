/* 2024-10-14 심볼 공부 11 */
/*
전역 심볼 공부
*/
let id = Symbol.for("id");
let id2 = Symbol.for("id");

console.log(id == id2); // true

let empty = Symbol.for();
let empty2 = Symbol.for();

console.log(empty == empty2); // true

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("Symbol's name");

console.log(Symbol.keyFor(globalSymbol)); // name
console.log(Symbol.keyFor(localSymbol)); // undefined

console.log(localSymbol.description); //  Symbol's name