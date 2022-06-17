import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';
import { RegisterAction } from '../Action/user.action';



export default function Register() {
    const [form, setForm] = useState({ first_name: '', last_name: '', email: '', password: '', confirm_password: '' })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setForm((old) => {
            return { ...old, [name]: value }
        })
    }
    const SubmitForm = async (e) => {
        e.preventDefault()
    
            let res = await RegisterAction(form);
            if (res.success) {
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
            }
    
    }

  return (
  <div className="login-form-bg h-100">
    <div className="container h-100">
        <div className="row justify-content-center h-100">
            <div className="col-xl-6">
                <div className="form-input-content">
                    <div className="card login-form mb-0">
                        <div className="card-body pt-5">
                            
                                <a className="text-center" > <h4>SignUp </h4></a>
    
                            <form className="mt-5 mb-5 login-input">
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={inputHandler} name="first_name" placeholder="Enter First Name" required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"  onChange={inputHandler}  name="last_Name" placeholder="Enter Last Namer" required/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" onChange={inputHandler}  name='email' placeholder="Enter Email" required/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" onChange={inputHandler}  name="Password" placeholder="Enter Password" required/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" onChange={inputHandler}  name="confirm_password" placeholder="Confirm Password" required/>
                                </div>
                                <button className="btn login-form__btn submit w-100" onClick={SubmitForm}>Sign Up</button>
                            </form>
                    
                               <p className="mt-5 login-form__footer">Already Have account ? <Link to={`${config.baseUrl}`}>Sign In</Link> now</p>
                               
                                 
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  

  )
}
