let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

user.sizes.height = 200;
let cop = Object.assign({}, user);

console.log( cop.sizes.height ); // 182