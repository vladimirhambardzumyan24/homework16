function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometr = 0;
  this.fill = function fill(gallons) {
    if (this.tank + gallons > milesPerGallon) {
      this.tank = milesPerGallon;
    } else {
      this.tank = this.tank + gallons;
    }
    return this.tank;
  };
  this.drive = function drive(distance) {
    if (distance < this.tank) {
      this.tank -= distance;
      this.odometr += distance;
      return `${this.tank}, ${this.odometr}`;
    } else {
      return `Iran out of fuel at ${this.odometr + distance} miles!`;
    }
  };
}

const bmw = new Car("M 5", 150);
console.log(bmw.fill(250));
console.log(bmw.drive(100));
