import React from 'react'

export default function EditProfile() {
  return (
    
    <div className="container-fluid">
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
                <button class="btn login-form__btn submit w-100" >Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
)
}