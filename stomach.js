function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = function eat(foodName) {
    if (this.stomach.length < 10) {
      return this.stomach.push(this.foodName);
    }
  };
  this.poop = function poop(params) {
    return (this.stomach = []);
  };
  this.toString = function toString() {
    return `${this.name} ${this.age} `;
  };
}
let per1 = new Person("Gago", 52);
console.log(per1.eat("Ananas"));
console.log(per1.poop());
console.log(per1.toString());
