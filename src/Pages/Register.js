import React from 'react'
import { useState } from 'react';

export default function Register() {
  //1.React hooks (// hooks can be use in only functional component not in class component )

  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

    let dataSubmit = () =>{

      let data = {
          "username": username,
          "email": email,
          "password": password
       }
      // console.log(username);
      // console.log(email);
      // console.log(password);

       
        fetch("http://localhost:1337/api/auth/local/register",{
            method : "POST",
            headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then((response)=>{response.json()})
        .then((data)=>{
            console.log(data);
            if(data.jwt){
              return alert('Register Successfully');
            }
        }).catch(()=>{})
        
    }

   

  return (
    <form className='offset-4 w-25'>
        <h1>REGISTER YOURSELF</h1>
  <div className="mb-3">
    <label htmlFor="userName" className="form-label">Username</label>
    <input type="text" name='username' value ={username} onChange={(e)=>{setUsername(e.target.value)}} className="form-control" id="userName" aria-describedby="username" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" name='email' value ={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name='password' value ={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="password" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="button"  onClick = {dataSubmit} className="btn btn-primary">Submit</button>
</form>
  )
}
