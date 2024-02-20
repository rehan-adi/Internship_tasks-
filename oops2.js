let User  = {
    name: 'Rehan',
    age: 17,
    Developer: true,
    Skills: ['React', 'JavaScript', 'PHP', 'Next JS'],
    SaySomething(){
         console.log('Hi');
    },
    MySkiils(){
        this.Skills.forEach((data) => {
             console.log(data);
        })
    }
}



console.log(User.name);
// In this case it print like this  [Function: SaySomething]
console.log(User.SaySomething);
// In this case it print like this - hi
User.SaySomething();
User.Skills.map((skills) => {
     console.log(skills);
 });

//   Changeing the value 
 User.name = 'Rehan_Developer'
 console.log(User.name);
 
 User.MySkiils();