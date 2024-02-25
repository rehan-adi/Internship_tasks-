function ParentFunc (){
     let myName = 'Rehan';
     function ChildFunc(){
         console.log(myName);
     }
     return ChildFunc;
};

const random = ParentFunc();

random();
