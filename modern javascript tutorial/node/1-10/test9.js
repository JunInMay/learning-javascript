let obj = {
  '가나다': '거너더',
  'abc': 'hello!',
  '2': 'c',
  '1': 'd',
  '3': 'e',
};
obj.except = 'no exception';

for (prop in obj) {
  console.log(prop);
}