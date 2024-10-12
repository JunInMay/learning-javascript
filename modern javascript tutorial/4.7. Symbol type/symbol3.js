/* 2024-10-12 심볼 공부 3 */

let id = Symbol("id");

let obj = {
  id: "James Park",
  [id]: "Are you confused about Symbol data type?",
};

console.log(obj.id); // James Park
console.log(obj[id]); // Are you confused about Symbol data type?
