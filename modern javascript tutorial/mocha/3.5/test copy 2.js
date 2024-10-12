describe("pow", function() {


  describe("세번 씩만 곱하는거 ㅋ", function() {
    

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
  
});