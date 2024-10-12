/* 2024-10-12 생성자 함수에 대한 궁금증 */
/*
어떻게 생성자 함수가 new 키워드와 함께 호출됐는지, 아닌지 알 수 있는 건가?
instsanceof 를 사용하는 예제. ChatGPT야 고마워!
*/

function amINew(name, age) {
  if (!(this instanceof amINew)) {
    return "not new";
  }

  this.name = name;
  this.age = age;

  return name;
}

console.log(amINew("james", 30)); // not new
console.log(new amINew("james", 30)); // amINew {name: 'james', age: 30}
