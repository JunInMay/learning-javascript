/* 2024-10-13 심볼 공부 7 */
/*
심볼 이름으로 심볼이 구분되지 않는다.
*/

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);
console.log(id1 === id2);

let id3 = id1;
console.log(id1 == id3);
console.log(id1 === id3);

let obj1 = {
  [id1] : 10,
};

console.log(obj1[id1]);
console.log(obj1[id3]);