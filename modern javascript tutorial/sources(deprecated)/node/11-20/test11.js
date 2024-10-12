/*
2024-08-01 새벽 https://ko.javascript.info/object 보면서 문제 푸는중
객체야 안녕?
중요도: 5
다음 각 동작을 한 줄씩, 코드로 작성해보세요.

빈 객체 user를 만듭니다.
user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
name의 값을 Pete로 수정해보세요.
user에서 프로퍼티 name을 삭제하세요.
*/

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);