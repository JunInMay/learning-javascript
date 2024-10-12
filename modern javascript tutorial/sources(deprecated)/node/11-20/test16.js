let obj = {
  'name' : 'jun',
  'age' : 29,
  'confidence' : 'good',
};

let newObj = Object.assign({}, obj);

for (prop in newObj) {
  console.log(prop, newObj[prop]);
}

/*
let obj1 = { 'name' : 'john', };
let obj2 = { 'age' : 32, };

let mergedObj = Object.assign({}, obj1, obj2); // 빈 객체에 obj1과 obj2 를 담는다.

for (let prop in mergedObj) {
  console.log(prop, mergedObj[prop]);
}
*/