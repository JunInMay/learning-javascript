let obj1 = { 'name' : 'john', };
let obj2 = { 'age' : 32, };

let mergedObj = Object.assign({}, obj1, obj2); // 빈 객체에 obj1과 obj2 를 담는다.

for (let prop in mergedObj) {
  console.log(prop, mergedObj[prop]);
}