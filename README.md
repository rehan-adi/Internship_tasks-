1. What is HigherOrder function ?

 -> Those functions who accept another function in argument or return a function is called HigherOrder function.

 2. what is  Callback in Js?

 ->  A callback function is a function passed as an argument to another function, which is then invoked or executed at a later point in the program, usually after the completion of an asynchronous operation.

 3. Closure in Js ?

 -> A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has finished executing. It forms a closed-over scope that "encloses" and captures the variables it needs.

   For example : 
  function parrentFunc(){
     let c = 2;
     function childFunc(){
         console.log(c);
     }
     return childFunc;
  }
  const result = parrentFunc();
  result();

4. How to call api in js ?
-> to fetch data from any api we can use fetch method that is a asyns nature lets see how we do that .

example : 

  async function apiData(){
        const api = await fetch('https//:facebook.com');
        const data = await api.json();
        console.log(data);
   }


 Here we create a async function inside it we have api variable, this variable store api data.
We will discus async/await in next part. Inside the apt we have a 'await' and fetch method and the api.
In the next line we convert the api in json format. And in last we prit it on console.

5. Async and await in Js ?

-> async is the keyword in javascript it's used to define a function that returns a promise.
async function allows us to use the await keyword within it.

The await keyword is used inside an async function to pause the execution of the function until the Promise is resolved, and it returns the resolved value.

For example prefer 4th Question example .


6. What is object in Js ?

-> An object in JavaScript is an unordered collection of key-value pairs, where each key is a string and each value can be any data type, including other objects. 

Example :  

const Entrepreneur = {
    name: 'Rehan',
    age: 17,
    position: 'CEO',
}

console.log(Entrepreneur.name)  output = Rehan
console.log(Entrepreneur.position)  output = CEO