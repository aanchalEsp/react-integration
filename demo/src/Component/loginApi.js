import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { RegisterAction } from '../Action/user.action';


export default  function LoginApi() {
   const [form, setForm] = useState({ first_name: '', last_name: '', email: '', password: '', confirm_password: '', wallet_address: '', termscondition: false })

    const inputHandler = (e) => {
      const { name, value } = e.target
      setForm((old) => {
          return { ...old, [name]: value }
      })
  }

 const onSubmit=(e)=>{
  e.preventDefault();

  let res =  RegisterAction(form);
  if (res.success) {
    alert("sucess")
                   setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    alert("failure")
    
                }

  // const item=(form)
  // console.log(item)
  // let res=fetch("https://espsofttech.org:6030/api/registration",{
  //   method:"POST",
  //   body:JSON.stringify(item),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },

  // }) .then((result) => result.json())
  // .then((json) => console.log(json));

  // console.log(res)


 }
  return (
    <div>

<form onSubmit={onSubmit}>
  <div classemail="mb-3">
    <label htmlFor="exampleInputEmail1" classemail="htmlForm-label">Enter first name</label>
    <input type="text" classemail="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="first_name" onChange={inputHandler}/>
    {/* {error.first_name&&<p style={{color:"red"}}>{error.first_name}</p>} */}
  </div>
  <div classemail="mb-3">
    <label htmlFor="exampleInputEmail1" classemail="htmlForm-label">Enter last name</label>
    <input type="text" classemail="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="last_name"onChange={inputHandler}
 />
    {/* {error.last_name&&<p style={{color:"red"}}>{error.last_name}</p>} */}
  </div>
  <div classemail="mb-3">
    <label htmlFor="exampleInputEmail1" classemail="htmlForm-label">Enter email</label>
    <input type="email" classemail="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"onChange={inputHandler}/>
    {/* {error.email&&<p style={{color:"red"}}>{error.email}</p>} */}
    <div id="emailHelp" classemail="htmlForm-text">We'll never share your email with anyone else.</div>
  </div>
  <div classemail="mb-3">
    <label htmlFor="exampleInputPassword1" classemail="htmlForm-label">Password</label>
    <input type="password" classemail="htmlForm-control" name="password" id="exampleInputPassword1" onChange={inputHandler}/>
    {/* {error.password&&<p style={{color:"red"}}>{error.password}</p>} */}

  </div>
  <div classemail="mb-3">
    <label htmlFor="exampleInputPassword1" classemail="htmlForm-label">confirm Password</label>
    <input type="password" classemail="htmlForm-control" name= "confirm_password" id="exampleInputPassword1" onChange={inputHandler}/>
    {/* {error.confirm_pass&&<p style={{color:"red"}}>{error.confirm_pass}</p>} */}

  </div>
  <button type="submit" classemail="btn btn-primary">Submit</button>
</form>

    </div>
  )
}
