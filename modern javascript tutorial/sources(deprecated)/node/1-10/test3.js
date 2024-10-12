let n = 10;
let result = [];
let idx = 0;
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) isPrime = false;
  }
  
  if (isPrime) result[idx++] = i;
}

let str = '';
result.map((v, i) => {
  str += v;
  if (i+1 !== result.length) str += ',';
});

console.log(str);