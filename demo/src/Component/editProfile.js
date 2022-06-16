import React from 'react'
import Nav from '../Component/nav'
import Footer from './footer'
import SideBar from './sideBar'
import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';


export default function EditProfile() {
  return (
   
      <div>
        <Nav/>
     <SideBar/>

<div>
<div className="row justify-content-center h-100">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Edit profile</h4>
         
            <div className="basic-form">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-default"
                    placeholder="Edit Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="phone"
                    className="form-control input-flat"
                    placeholder="Edit Phone number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-rounded"
                    placeholder="Edit Email"
                  />
                </div>
                <Link to={`${config.baseUrl}profile`}><button class="btn login-form__btn submit w-100">Submit</button></Link>  

              </form>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>

  
)
}