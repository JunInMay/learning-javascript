/* 2024-10-13 심볼 공부 10 */
/*
심볼을 사용하는 이유
*/
let obj = {
  id: 10,
  name: "something",
  add: function() {
    this.id++;
  }
}

let ourObj = obj;
let id = Symbol("id");

ourObj[id] = "1번 라이브러리";

ourObj.add();
console.log(ourObj.id); // 11
console.log(ourObj[id]); // 1번 라이브러리
