class Person {
  constructor(name, age, favoriteToy) {
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
  }
  play() {
    return `Playing with ${this.favoriteToy},`;
  }
}
let baby1 = new Person("Erik", 7, "car");
console.log(baby1.play());
