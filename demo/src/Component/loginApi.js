import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import {unstable_HistoryRouter} from 'react-router-dom'

export default function LoginApi() {
    const[email, setemail]=useState("")
    const[password, setPassword]=useState("")
    const[error,setError]=useState({email:"", password:""})

 const inputemail=(e)=>{
    setemail(e.target.value)
 }
 const inputPassword=(e)=>{
    setPassword(e.target.value)
 }
// api data=
// https://espsofttech.org:6030/api/registration

// {
// 	"first_name" : "Pawan",
// 	"last_name" : "Parmar",
// 	"email" : "pawan.espsofttech@gmail.com",
// 	"password" : "Espsoft123#",
// 	"confirm_password" : "Espsoft123#"
// }
 const onSubmit=(e)=>{
  let item={email,password}
  console.log(item)

 let res=fetch("https://reqres.in/api/register",{
    method:"POST",
    body:JSON.stringify(item),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  }) .then((result) => result.json())
  .then((json) => console.log(json));
  
  console.log(res)

e.preventDefault();
if(email.length<5 && password.length<5){
    setError({email:"email is too short", password:"password is too short"})(email.length<5)
}
else if(password.length<5){
    setError({password:"password is too short"})
}
else if(email.length<5){
    setError({email:"length is too short"})

}
 }
  return (
    <div>

<form>
  <div classemail="mb-3">
    <label htmlFor="exampleInputEmail1" classemail="htmlForm-label">Email address</label>
    <input type="email" classemail="htmlForm-control" value={email}id="exampleInputEmail1" aria-describedby="emailHelp" onChange={inputemail}/>
    {error.email&&<p style={{color:"red"}}>{error.email}</p>}
    <div id="emailHelp" classemail="htmlForm-text">We'll never share your email with anyone else.</div>
  </div>
  <div classemail="mb-3">
    <label htmlFor="exampleInputPassword1" classemail="htmlForm-label">Password</label>
    <input type="password" classemail="htmlForm-control" value={password}id="exampleInputPassword1" onChange={inputPassword}/>
    {error.password&&<p style={{color:"red"}}>{error.password}</p>}

  </div>
  <div classemail="mb-3 htmlForm-check">
    <input type="checkbox" classemail="htmlForm-check-input" id="exampleCheck1"/>
    <label classemail="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" classemail="btn btn-primary" onClick={onSubmit}>Submit</button>
</form>

    </div>
  )
}
