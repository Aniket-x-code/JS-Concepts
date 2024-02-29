console.log ( "Hola")

// function statement or function declaration

function greet() {
    console.log("greet called");
}

greet();
// function expression

var b = function (){
    console.log("b called");
}
b();

//named fn expression is just a  fn expresssion where we give name to the function
var z = function xy(){
    console.log("z called");
}
z();

// parameters and arguments

var vo = function (param1 , param2){
    console.log("b called");
}
vo( arg1 , arg2);

//first class function - is the ability of a function to be used as value
var u = function (p1){
    return function()
    {

    }
}
 console.log(u());

// anonymous function - this gives syntax error because acc to js syntax function name is mandatory
//  they are used when functions are used as value
//   