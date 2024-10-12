
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

  describe("엣지 케이스 ㅋ", function() {
    it("n이 음수일 때 결과는 NaN입니다.", function() {
      assert.isNaN(pow(2, -1));
    });
  
    it("n이 정수가 아닐 때 결과는 NaN입니다.", function() {
      assert.isNaN(pow(2, 1.5));
    });
  });

  /*
  잘못된 점 찾기
  중요도: 5
  함수 pow의 테스트 코드를 보고 무엇이 잘못되었나 알아보세요.
  */
  it("주어진 숫자의 n 제곱", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });
  /*
  잘못된 점
  에러 발생 상세 원인을 찾기가 어려워진다. 테스트 케이스들이 통합되어 있기 때문이다.
  즉 명확한 입력값, 출력값이 여러개의 `it` 과 함께 쪼개져야 한다.

  it("5의 1 제곱 = 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5의 2 제곱 = 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5의 3 제곱 = 125", function() {
    assert.equal(pow(5, 3), 125);
  });
  */
});