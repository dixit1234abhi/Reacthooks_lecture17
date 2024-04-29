import React, { useState } from 'react'

export default function Login() {
  //1.hooks area
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

let loginSubmit = () =>{
  // console.log('hihihih');

  let payload = {
    
  }

}

  return (
    <form className='offset-4 w-25'>
        <h1>LOGIN FORM</h1>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" name='email' value={email} className="form-control" id="email" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password"  name='email' value={password} className="form-control" id="password" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="button" onClick={loginSubmit} className="btn btn-primary">Submit</button>
</form>

  )
}
