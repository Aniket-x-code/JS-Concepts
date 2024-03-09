console.log("hello mf");


const radius = [10,2,3,4];

function double (x)
{
    return x*2;
} // transformation logic

function binary(x)
{
   return x.toString(2);
}

const ouput = radius.map( double);
const bin = radius.map(binary);
console.log(ouput);
console.log(bin);

// reduce fn ( fn (acc, cur), initial value of acc)

const out = radius.reduce((acc, cur) =>{
     acc= acc+cur;
     return acc;
},0);
console.log(out); // here 0 is teh initial value of acc because sum ko 0 se initial karna hai