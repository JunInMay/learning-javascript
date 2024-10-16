/*
2024-10-16 객체의 형 변환 공부 7

https://ko.javascript.info/object-toprimitive

모던 자바스크립트에서 말하길, toString() 과 valueOf() 는 원시값을 반환한다면 "메서드가 마치 없었던 것처럼" 동작한다고 했다.
메서드가 없는데 호출하면 어떻게 되는가? undefined가 나오지 않나?

> undefined 가 아니라, TypeError 나오는게 정상.
*/
let obj = {
  name: "myLove",
  age: 20,
  valueOf: function() {
    return {name: "valueOf 객체"};
  },
  // toString: function() {
  //   return {name: "toString 객체"};
  // },
};

console.log(obj);