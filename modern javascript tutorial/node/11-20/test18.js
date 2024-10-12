let obj1 = {
  'name' : 'jun', // name 항목 중복!
  'age' : 29,
};

let obj2 = {
  'name' : 'alex', // name 항목 중복!
  'job' : 'programmer',
};

let newObj = Object.assign({}, obj1, obj2);

for (let prop in newObj) {
  console.log(prop, newObj[prop]);
}