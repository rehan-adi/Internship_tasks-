// This is a class  and a constructor function

class Car {
    constructor(brand, price, model){
          this.brand = brand;
          this.price = price
          this.model = model
    }
}



const Tesla = new Car('Tesla X', '3.2 cr', '10')
console.log(Tesla.brand);
const Audi = new Car('Auid R8', '2 Cr', 'R8');
console.log(Audi);