1. What is HigherOrder function ?

 -> Those functions who accept another function in argument or return a function in called HigherOrder function.

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

  