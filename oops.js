let car = {
    brand: 'Bmw',
    price: '1 cr',
    model: 'm3',
}

console.log(car.brand);


function AllCar(brand, price, model){
    this.brand =  brand;
    this.price =  price;
    this.model =  model;
}

const CollectionsOfCar = new AllCar('Audi', '80l', 'R8')

console.log(CollectionsOfCar);