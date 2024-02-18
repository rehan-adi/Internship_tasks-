// sync function 
const a = 10;
const b = 20;

const sum = a + b;
console.log(sum);

// async function 

async function sumOfNum(){
        let api = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
        let data = await api.json();
        console.log(data);
}

sumOfNum();