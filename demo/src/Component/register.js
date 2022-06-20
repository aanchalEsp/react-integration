import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';
import { RegisterAction } from '../Action/user.action';




export default function Register() {
    const [form, setForm] = useState({ first_name: '', last_name: '', email: '', password: '' ,confirm_password: '',})
    const [validatioError, setvalidatioError] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target
        setForm((old) => {
            return { ...old, [name]: value }
        })
    }
    function validate() {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";
        let confirmPasswordError = "";
      

        if (form.first_name === '') {
            firstNameError = "First name is required."
        }
        if (form.last_name === '') {
            lastNameError = "Last name is required."
        }
        if (form.email === '') {
            emailError = "Email is required."
        }
        if (form.password === '') {
            passwordError = "Password is required."
        }
        if (form.confirm_password === '') {
            confirmPasswordError = "Confirm password is required."
        }
        if (form.password != form.confirm_password && (form.password && form.confirm_password)) {
            confirmPasswordError = "Password and confirm password does not match."
        }
     
        
        if (firstNameError || lastNameError || emailError || passwordError || confirmPasswordError) {
            setvalidatioError({
                firstNameError, lastNameError, emailError, passwordError, confirmPasswordError
            })
            return false
        } else {
            return true
        }
    }


    const SubmitForm = async (e) => {
        e.preventDefault()
        const isValid = validate();
        if (!isValid) {

        }
        else {
            let res = await RegisterAction(form);
            if (res.success) {

alert("sucess")
               setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                alert("failure")

            }
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
    
                            <form className="mt-5 mb-5 login-input" >
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={inputHandler} name="first_name" placeholder="Enter First Name" required/>
                                    <span className="validationErr" style={{color:'red'}}>{validatioError.firstNameError}</span>

                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"  onChange={inputHandler}  name="last_name" placeholder="Enter Last Name" required/>
                                    <span className="validationErr" style={{color:'red'}}>{validatioError.lastNameError}</span>

                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" onChange={inputHandler}  name='email' placeholder="Enter Email" required/>
                                    <span className="validationErr" style={{color:'red'}}>{validatioError.emailError}</span>

                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" onChange={inputHandler}  name="password" placeholder="Enter Password" required/>
                                    <span className="validationErr" style={{color:'red'}}>{validatioError.passwordError}</span>

                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" onChange={inputHandler}  name="confirm_password" placeholder="Confirm Password" required/>
                                    <span className="validationErr" style={{color:'red'}}>{validatioError.confirmPasswordError}</span>

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
