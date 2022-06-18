import React, { useEffect, useState } from 'react'

function Chuck() {
  
  const [users, setUsers] = useState([]);

  const url = "https://api.chucknorris.io/jokes/random";

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(()=>{
      getUsers();
    }, [])
  
  return(
    <>
      <h1 style={{padding: '5px 50px', textAlign: 'center'}}>{users.value}</h1>
    </>
  )

}



export default Chuck