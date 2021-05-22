function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = function eat(foodName) {
    if (this.stomach.length < 10) {
      this.stomach.push(foodName);
      return this.stomach
    }
  };
  this.poop = function poop(params) {
    this.stomach.length = 0;
    return this.stomach
  };
  this.toString = function toString() {
    return `${this.name} ${this.age} `;
  };
}
let per1 = new Person("Gago", 52);
console.log(per1.eat("Ananas"));
console.log(per1.poop());
console.log(per1.toString());
