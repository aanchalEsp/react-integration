import React from 'react'
import Nav from '../Component/nav'
import Footer from './footer'
import SideBar from './sideBar'
import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';
import Cookies from 'js-cookie'
import Header from './header';

export default function EditProfile() {
  const loginData = (!Cookies.get('loginSuccessDemoProject')) ? [] : JSON.parse(Cookies.get('loginSuccessDemoProject'));

  if(loginData==""){
      window.location.href = `${config.baseUrl}`
  }
  else{

  }
  return (

    <div>
 
      <> 
      <Nav />
      <Header />
      <SideBar />

      <div class="login-form-bg h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100">
                <div class="col-xl-6">
                    <div class="form-input-content">
                        <div class="card login-form mb-0">
                            <div class="card-body pt-5">
                                <a class="text-center" > <h4>Edit your Profile</h4></a>
                                <form class="mt-5 mb-5 login-input">
                                    <div class="form-group">
                                        <label>Edit Name</label>
                                        <input type="email" class="form-control" placeholder="Name"/>
                                    </div>
                                    <div class="form-group">
                                        <label>Edit Emails</label>
                                        <input type="email" class="form-control" placeholder="Email"/>
                                    </div>
                                    <div class="form-group">
                                        <label>Edit Mobile no.</label>
                                        <input type="email" class="form-control" placeholder="Mobile"/>
                                    </div>
                                    <div class="form-group">
                                    <label>Edit Password</label>
                                        <input type="password" class="form-control" placeholder="Password"/>
                                    </div>
                                   <Link to={`${config.baseUrl}profile`}> <button class="btn login-form__btn submit w-100">DONE</button></Link>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
    </div>


  )
}