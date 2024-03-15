console.log( "Async linked");


const p1 = new Promise((resolve, reject) => {
  setTimeout( ()=>{
    resolve ("p1 resolved");
},2000)
   
}
)

 async function getdata()
{
   const val = await p1;
   console.log("Namaste js");
   console.log(val);

  // using async and await - await can only be used inside async function only
}

getdata();


