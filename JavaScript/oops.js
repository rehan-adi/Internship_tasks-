// This is a class  and a constructor function

class Car {
    constructor(brand, price, model){
          this.brand = brand;
          this.price = price
          this.model = model
    }
}

const demo = [{ name: 'fizan', age: 100,}, {name: 'rehan', age: 17}, {name: 'abc', age: 200}]

demo[2].name = 'tom';
console.log(demo[2].name);



const Tesla = new Car('Tesla X', '3.2 cr', '10')
console.log(Tesla.brand);
const Audi = new Car('Auid R8', '2 Cr', 'R8');
console.log(Audi);

class Plane extends Car{
    constructor(brand, price, model, capacity){
          super(brand, price, model)
          this.capacity = capacity;
    }
}

const AirIndia =  new Plane ('Air India', '400M', 'AirBus A7', 5000)
const FedEx =  new Plane ('FedEx', '300M', 'Boing 400 A7', 3000)
const Indigo =  new Plane ('Indigo', '480M', 'AirBus 747', 3200)

console.log(AirIndia.brand);
console.log(AirIndia.model);
