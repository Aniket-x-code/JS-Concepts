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