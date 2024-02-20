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

// anonymous function - this gives syntax error because acc to js syntax function name is mandatory
//  they are used when functions are used as values
function ()
{

}