/* 2024-10-13 심볼 공부 8 */
/*
심볼은 for ... in 순회로 참조되지 않는다.
for of도?
*/

let addr = Symbol("주거지");

let obj = {
  name: "홍홍홍",
  age: "40",
  [addr]: "비밀 주거지",
};

for (const key in obj) {
  console.log(key, obj[key]);
}