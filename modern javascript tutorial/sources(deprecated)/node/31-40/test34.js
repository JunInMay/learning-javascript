// 체이닝 적용 전

let character = {
  level : 1 ,
  up() {
    this.level += 1;
  },
  down() {
    this.level -= 1;
  },
  showLevel() {
    console.log(this.level);
  },
}

character.up();
character.up();
character.down();
character.showLevel();