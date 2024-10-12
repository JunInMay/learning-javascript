

describe("pow", function() {


  describe("세번 씩만 곱하는거 ㅋ1", function() {
    
    before(() => alert("Testing started – before all tests"));
    after(() => alert("Testing finished – after all tests"));
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}를 세 번 곱하면 ${expected}입니다.`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let x = 0; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("세번 씩만 곱하는거 ㅋ2", function() {
    beforeEach(() => alert("Before a test – enter a test"));
    afterEach(() => alert("After a test – exit a test"));
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}를 세 번 곱하면 ${expected}입니다.`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let x = 0; x <= 1; x++) {
      makeTest(x);
    }
  });
  
});