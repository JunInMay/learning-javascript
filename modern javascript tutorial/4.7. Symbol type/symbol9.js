/* 2024-10-13 심볼 공부 9 */
/*
심볼을 사용하는 이유
*/
let id = Symbol("id");

let obj = {
  id: "AMB1239C10",
};

obj[id] = "1번";

console.log(obj.id); // AMB1239C10
console.log(obj[id]); // 1번