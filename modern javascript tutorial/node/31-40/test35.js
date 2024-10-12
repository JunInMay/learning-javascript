// 체이닝 적용 후
let character = {
  level : 1 ,
  up() {
    this.level += 1;
    return this;
  },
  down() {
    this.level -= 1;
    return this;
  },
  showLevel() {
    console.log(this.level);
  },
}

character.up().up().down().showLevel();