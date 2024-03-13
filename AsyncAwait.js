console.log( "Async linked");


const p1 = new Promise((resolve, reject) => {
    resolve("p1 resolved");
}
)

 async function getdata()
{
   const val = await p1;

  // using async and await 
}

getdata();
