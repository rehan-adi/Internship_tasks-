function Higher(func){

}
Higher(function(){})

// or 

function HigherOrFunc(){
    return function(){};
}
HigherOrFunc();