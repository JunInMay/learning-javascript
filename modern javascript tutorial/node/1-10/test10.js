let obj = {
  '+2': 'c',
  '+1': 'd',
  '+3': 'e',
};

for (prop in obj) {
  console.log(+prop);
}