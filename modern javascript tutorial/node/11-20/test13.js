'use strict';
/*
2024-08-01 새벽 https://ko.javascript.info/object 보면서 문제 푸는중
변하지 않는 객체?
중요도: 5
const와 함께 선언한 객체를 변경하는 게 가능할까요? 생각을 공유해주세요!

const user = {
  name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete";
*/
/*
내가 낸 정답 : 가능하다
이유 : 참조형 자료형이기 때문에, 실제로 user가 상수로 선언됐어도 user 내부의 속성은 변화할 수 있다. 그 대신 user가 가리키는 객체 자체가 바뀌어선 안된다.

*/


/*
2024-08-01 새벽 https://ko.javascript.info/object 보면서 문제 푸는중
프로퍼티 합계 구하기
중요도: 5
모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요. sum엔 390이 저장되어야겠죠?

주의: salaries가 비어있다면 sum에 0이 저장되어야 합니다.
*/

function sum(obj) {
  let result = 0;
  for (let prop in obj) {
    result += obj[prop];
  }

  return result;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

console.log(sum(salaries));

