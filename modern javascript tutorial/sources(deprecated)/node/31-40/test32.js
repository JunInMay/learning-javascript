'use strict';
/*
https://ko.javascript.info/object-methods

2024-09-11 오전 3시 8분 위 링크에서 과제 하는 중.

과제 1.

객체 리터럴에서 'this' 사용하기
중요도: 5
함수 makeUser는 객체를 반환합니다.

이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // 결과가 어떻게 될까요?

this는 함수를 호출한 주체를 참조한다.
makeUser() 는 글로벌 객체에서 호출됐다. 따라서 user 객체는 {name: John, ref : 글로벌 객체}가 될 것이다.
글로벌 객체에선 name 속성이 없다. 따라서 user.ref.name은 undefined다.

결과 : 엄격모드에선 undefined가 아니고, 프로퍼티를 읽을 수 없다는 오류가 남.

결과2 : 엄격모드가 아닐 경우 Node.js에선 undefined 맞음.
*/


function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

console.log(user.ref.name ); // 결과가 어떻게 될까요?