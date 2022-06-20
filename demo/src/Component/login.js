import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';
import { LoginAction } from '../Action/user.action';


export default function Login(props) {

    const[form,setForm]=useState({email:"",password:""})
    // const[error,setError]=useState({})

    const inputHandler = (e) => {
        const { name, value } = e.target
        setForm((old) => {
            return { ...old, [name]: value }
        })
    }


 const SubmitForm = async (e) => {
    e.preventDefault()
   
        let res = await LoginAction(form);
        if (res.success) {   
            alert("login sucess")
          
            setTimeout(() => {
                window.location.href = `${config.baseUrl}dashboard` ;
            }, 2000);
        } else {
            alert("login failed please registered")
        }
    
}
   

  return (
     <div class="login-form-bg h-100">
    <div class="container h-100">
        <div class="row justify-content-center h-100">
            <div class="col-xl-6">
                <div class="form-input-content">
                    <div class="card login-form mb-0">
                        <div class="card-body pt-5">
                            <a class="text-center" href="index.html"> <h4>Login here</h4></a>
    
                            <form class="mt-5 mb-5 login-input">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email" name="email" onChange={inputHandler}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password" name="password" onChange={inputHandler}/>
                                </div>

                                <button class="btn login-form__btn submit w-100" onClick={SubmitForm}>Sign In</button>
                            </form>
                            <p class="mt-5 login-form__footer">Dont have account? <Link to={`${config.baseUrl}register`}>Sign Up</Link> now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
