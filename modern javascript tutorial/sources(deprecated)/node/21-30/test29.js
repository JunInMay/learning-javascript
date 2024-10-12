let outerArrow = () => {
  return this;
};

let obj = {
  arrow1: () => this,
  arrow2() {
    let arrowInDepth = () => this;
    return arrowInDepth();
  },
  arrow3() {
    let arrowInDepth = () => {
      let arrowInMoreDepth = () => this;
      return arrowInMoreDepth();
    }
    return arrowInDepth();
  },
};

console.log("outerArrow() : ", outerArrow()); // outerArrow() :  {}
console.log("obj.arrow1() : ", obj.arrow1()); // obj.arrow1() :  {}
console.log("obj.arrow2() : ", obj.arrow2()); // obj.arrow2() :  {arrow1: ƒ, arrow2: ƒ, arrow3: ƒ}
console.log("obj.arrow3() : ", obj.arrow3()); // obj.arrow3() :  {arrow1: ƒ, arrow2: ƒ, arrow3: ƒ}

console.log(outerArrow() == obj.arrow1()); // true