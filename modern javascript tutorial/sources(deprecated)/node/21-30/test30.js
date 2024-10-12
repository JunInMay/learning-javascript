let outerArrow = () => {
  return this;
};

let hasDepthArrow = () => {
  let depthArrow = () => this;

  return depthArrow();
}

let obj = { };

obj.arrow1 = outerArrow;
obj.arrow2 = hasDepthArrow;

console.log(obj.arrow1()); // {}
console.log(obj.arrow2()); // {}

