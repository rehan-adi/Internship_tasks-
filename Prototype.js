const Rehan = {
    name: 'Rehan',
    age: 17,
    height: '175cm',
}

const OtherHuman = {
    iq: 100,
}

OtherHuman.__proto__ = Rehan;

console.log(OtherHuman.name);
console.log(OtherHuman.height);
console.log(OtherHuman.age);