const original = { name: 'Alice', age: 30 };
const clone = structuredClone(original);

console.log(clone); // { name: 'Alice', age: 30 }
console.log(clone === original); // false (different objects)
