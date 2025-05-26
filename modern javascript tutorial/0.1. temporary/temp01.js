// this 에 대한 궁금증
/*
그냥 이것저것 실험 중
*/
console.log(this); // -> 출력: {}

console.log(this === module.exports); // true

let arrowFunction = () => this;

console.log(arrowFunction() === this);
