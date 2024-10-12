outer: for (let i = 0; i < 10; i++) {
  let isBreak = false;
  for (let j = 0; j < 10; j++) {
    console.log(i * j);
    if (i == 5 && j == 5) break outer
  }
  if (isBreak) break;
}

