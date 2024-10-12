/*
2024-08-01 새벽 https://ko.javascript.info/object 보면서 문제 푸는중
객체가 비어있는지 확인하기
중요도: 5
객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

아래와 같이 동작해야 합니다.

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.
*/
let alert = console.log;
function isEmpty(obj) {
  let count = 0;
  for (prop in obj) {
    count++;
  }

  return count === 0;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

/*
해답
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

후기 : 꽤 비슷하네? 호오.. 저기서 return false를 해도 되겠구만.
*/