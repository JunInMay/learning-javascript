let outerArrow = () => {
  return this;
};

console.log("outerArrow() : ", outerArrow()); // 전역 객체 반환