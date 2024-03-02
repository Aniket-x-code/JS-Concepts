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


// arrow fn


console.log("Start"); // this calls the console web api (through window) which in turn actually modifies values in console. 
setTimeout(function cbT() { 
  console.log("CB Timeout");
}, 5000);
fetch("https://api.netflix.com").then(function cbF() {
    console.log("CB Netflix");
}); // take 2 seconds to bring response
// millions lines of code
console.log("End"); 

// Code Explaination:
// * Same steps for everything before fetch() in above code.
// * fetch registers cbF into webapi environment along with existing cbT.
// * cbT is waiting for 5000ms to end so that it can be put inside callback queue. cbF is waiting for data to be returned from Netflix servers gonna take 2 seconds.
// * After this millions of lines of code is running, by the time millions line of code will execute, 5 seconds has finished and now the timer has expired and response from Netflix server is ready.
// * Data back from cbF ready to be executed gets stored into something called a Microtask Queue.
// * Also after expiration of timer, cbT is ready to execute in Callback Queue.
// * Microtask Queue is exactly same as Callback Queue, but it has higher priority. Functions in Microtask Queue are executed earlier than Callback Queue.
// * In console, first Start and End are printed in console. First cbF goes in callstack and "CB Netflix" is printed. cbF popped from callstack. Next cbT is removed from callback Queue, put in Call Stack, "CB Timeout" is printed, and cbT removed from callstack.
// * See below Image for more understanding