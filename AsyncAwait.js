const Api= "https://api.github.com/users/aniket-x-code"


async function handlePromie(){

  try
  {
  const data = await fetch(Api)
 const res = await  data.json();
 console.log(res);
  }
  catch(err)
  {
    console.log(err);
  }
}

handlePromie()
