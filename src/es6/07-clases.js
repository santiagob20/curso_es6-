// Declarar una clase
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

// Instanciar una clase
// const newUser = new User('Santiago');
// console.log(newUser.greeting());

const user1 = new User('Cesar', 18);
user1.age = 15;
console.log(user1.uAge);