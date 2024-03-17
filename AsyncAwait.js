console.log( "Async linked");


const p1 = new Promise((resolve, reject) => {
  setTimeout( ()=>{
    resolve ("p1 resolved");
},1000)
}
)


const p2 = new Promise((resolve, reject) => {
  setTimeout( ()=>{
    resolve ("p2 resolved");
},5000)
}
)


 async function getdata()
{
  console.log("Hello js");
   const val = await p1;
   console.log("Namaste js");
   console.log(val);

    const val2 = await p2;
    console.log(val2);
    console.log("End");

  // using async and await - await can only be used inside async function only
}

getdata();


