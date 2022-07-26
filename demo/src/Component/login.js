import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';
import { LoginAction } from '../Action/user.action';
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';
import { FullNode } from 'chia-client';
import { Toast } from 'bootstrap';
// import https from https-browserify;



export default function Login(props) {
    
    const fullNode = new FullNode({
        protocol: 'https',
        hostname: 'localhost',
        port: 8555
    });
    
    const blockchain = fullNode.getBlockchainState();
    
    console.log(blockchain.blockchain_state.space);
    
    const loginData = (!Cookies.get('loginSuccessDemoProject')) ? [] : JSON.parse(Cookies.get('loginSuccessDemoProject'));

    if(loginData==""){
    }
    else{
        window.location.href = `${config.baseUrl}dashboard`

    }

    const[form,setForm]=useState({email:"",password:""})
    const[error,setError]=useState({})

    const inputHandler = (e) => {
        const { name, value } = e.target
        setForm((old) => {
            return { ...old, [name]: value }
        })
    }
    function validate(){
        let emailError = "";
        let passwordError = "";

        if (form.email === '') {
            emailError = "Email is required."
        }
        if (form.password === '') {
            passwordError = "Password is required."
        }
        if (emailError || passwordError) {
            setError({
                emailError, passwordError
            })
            return false
        }else{
            return true
        }
    }



 const SubmitForm = async (e) => {
    e.preventDefault()
    let valid=validate()
    if(!valid){

    }
    else{
        let res = await LoginAction(form);
        if (res.success) {  
toast.success(res.msg) 
            Cookies.set('loginSuccessDemoProject', JSON.stringify(res.data));
            // console.log(Cookies.get('loginSuccessDemoProject'));
          
            setTimeout(() => {
                window.location.href = `${config.baseUrl}dashboard` ;
            }, 2000);
        } else {
            toast.error(res.msg) 
        }
    }
   
        
    
}



  return (
    
     <div class="login-form-bg h-100">
    <Toaster /> 

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
                                    <span className="validationErr" style={{color:"red"}}>{error.emailError}</span>

                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password" name="password" onChange={inputHandler}/>
                                    <span className="validationErr" style={{color:"red"}}>{error.passwordError}</span>

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
