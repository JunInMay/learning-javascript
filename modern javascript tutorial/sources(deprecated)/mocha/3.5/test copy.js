describe("pow", function() {
  
  it("2를 세 번 곱하면 8입니다.", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3을 네 번 곱하면 81입니다.", function() {
    assert.equal(pow(3, 4), 81);
  });

  it("주어진 숫자의 n 제곱", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });

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