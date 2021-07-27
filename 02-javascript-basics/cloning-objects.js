let car = {
  color: 'red',
  extras: {
    radio: "premium",
    ac: false
  },
  sellingDate: new Date(),
  writeColor: function() {
    console.log('This car is ' + this.color);
  }
};

let _car = {...car};
let _car2 = Object.assign({}, car);
let _car3 = JSON.parse(JSON.stringify(car));

car.extras.ac = true;

console.log(_car);
console.log(_car2); 
console.log(_car3);
