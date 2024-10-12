function User(name) { 
  this.name = name;
  this.job = "professor";
}

let user = new User("James");

console.log(user.name); // James
console.log(user.job); // professor