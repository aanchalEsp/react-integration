
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import config from '../config/config';
import SideBar from "./sideBar";
import Nav from "./nav";
import Header from "./header";
import Cookies from 'js-cookie'



function Profile() {
  const loginData = (!Cookies.get('loginSuccessDemoProject')) ? [] : JSON.parse(Cookies.get('loginSuccessDemoProject'));

  if (loginData == "") {
    window.location.href = `${config.baseUrl}`
  }
  else {

  }
  const navigate = useNavigate();
  return (
    <div >
      <>
        <Nav />
        <Header />
        <SideBar />

        <div className="content-body">
          <div className="row page-titles mx-0">
            <div className="col p-md-0">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0)">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="javascript:void(0)">Home</a>
                </li>
              </ol>
            </div>
          </div>
          {/* row */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center mb-4">
                      <img
                        className="mr-3"
                        src="images/avatar/11.png"
                        width={80}
                        height={80}
                        alt=""
                      />
                      <div className="media-body">
                        <h3 className="mb-0">Aanchal Kushwaha</h3>
                        <p className="text-muted mb-0">Indore</p>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col">
                        <div className="card card-profile text-center">
                          <span className="mb-1 text-primary">
                            <i className="icon-people" />
                          </span>
                          <h3 className="mb-0">263</h3>
                          <p className="text-muted px-4">Following</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-profile text-center">
                          <span className="mb-1 text-warning">
                            <i className="icon-user-follow" />
                          </span>
                          <h3 className="mb-0">263</h3>
                          <p className="text-muted">Followers</p>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button className="btn btn-danger px-5">Follow Now</button>
                      </div>
                    </div>
                    <h4>About Me</h4>
                    <p className="text-muted">
                      Hi, I'm Aanchal, has been the industry standard dummy text ever
                      since the 1500s.
                    </p>
                    <ul className="card-profile__info">
                      <li className="mb-1">
                        <strong className="text-dark mr-4">Mobile</strong>{" "}
                        <span>01793931609</span>
                      </li>
                      <li>
                        <strong className="text-dark mr-4">Email</strong>{" "}
                        <span>aanchal.espsofttech@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <form action="#" className="form-profile">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="textarea"
                          id="textarea"
                          cols={30}
                          rows={2}
                          placeholder="Post a new message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="d-flex align-items-center">
                        <ul className="mb-0 form-profile__icons">
                          <li className="d-inline-block">
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-user" />
                            </button>
                          </li>
                          <li className="d-inline-block">
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-paper-plane" />
                            </button>
                          </li>
                          <li className="d-inline-block">
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-camera" />
                            </button>
                          </li >
                          <li className="d-inline-block">
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-smile" />
                            </button>
                          </li>
                        </ul>
                        <button className="btn btn-primary px-3 ml-4">Send</button>
                        <button className="btn btn-primary px-3 ml-4" onClick={() => navigate("/demo/editprofile")}>Edit Profile</button>
                      </div>
                      <div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="media media-reply">
                      <img
                        className="mr-3 circle-rounded"
                        src="images/avatar/2.jpg"
                        width={50}
                        height={50}
                        alt="Generic placeholder image"
                      />
                      <div className="media-body">
                        <div className="d-sm-flex justify-content-between mb-2">
                          <h5 className="mb-sm-0">
                            Milan Gbah{" "}
                            <small className="text-muted ml-3">
                              about 3 days ago
                            </small>
                          </h5>
                          <div className="media-reply__link">
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-thumbs-up" />
                            </button>
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-thumbs-down" />
                            </button>
                            <button className="btn btn-transparent text-dark font-weight-bold p-0 ml-2">
                              Reply
                            </button>
                          </div>
                        </div>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                          scelerisque ante sollicitudin. Cras purus odio, vestibulum
                          in vulputate at, tempus viverra turpis. Fusce condimentum
                          nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                          in faucibus.
                        </p>
                        <ul>
                          <li className="d-inline-block">
                            <img
                              className="rounded"
                              width={60}
                              height={60}
                              src="images/blog/2.jpg"
                              alt=""
                            />
                          </li>
                          <li className="d-inline-block">
                            <img
                              className="rounded"
                              width={60}
                              height={60}
                              src="images/blog/3.jpg"
                              alt=""
                            />
                          </li>
                          <li className="d-inline-block">
                            <img
                              className="rounded"
                              width={60}
                              height={60}
                              src="images/blog/4.jpg"
                              alt=""
                            />
                          </li>
                          <li className="d-inline-block">
                            <img
                              className="rounded"
                              width={60}
                              height={60}
                              src="images/blog/1.jpg"
                              alt=""
                            />
                          </li>
                        </ul>
                        <div className="media mt-3">
                          <img
                            className="mr-3 circle-rounded circle-rounded"
                            src="images/avatar/4.jpg"
                            width={50}
                            height={50}
                            alt="Generic placeholder image"
                          />
                          <div className="media-body">
                            <div className="d-sm-flex justify-content-between mb-2">
                              <h5 className="mb-sm-0">
                                Milan Gbah{" "}
                                <small className="text-muted ml-3">
                                  about 3 days ago
                                </small>
                              </h5>
                              <div className="media-reply__link">
                                <button className="btn btn-transparent p-0 mr-3">
                                  <i className="fa fa-thumbs-up" />
                                </button>
                                <button className="btn btn-transparent p-0 mr-3">
                                  <i className="fa fa-thumbs-down" />
                                </button>
                                <button className="btn btn-transparent p-0 ml-3 font-weight-bold">
                                  Reply
                                </button>
                              </div>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel
                              metus scelerisque ante sollicitudin. Cras purus odio,
                              vestibulum in vulputate at, tempus viverra turpis. Fusce
                              condimentum nunc ac nisi vulputate fringilla. Donec
                              lacinia congue felis in faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="media media-reply">
                      <img
                        className="mr-3 circle-rounded"
                        src="images/avatar/2.jpg"
                        width={50}
                        height={50}
                        alt="Generic placeholder image"
                      />
                      <div className="media-body">
                        <div className="d-sm-flex justify-content-between mb-2">
                          <h5 className="mb-sm-0">
                            Milan Gbah{" "}
                            <small className="text-muted ml-3">
                              about 3 days ago
                            </small>
                          </h5>
                          <div className="media-reply__link">
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-thumbs-up" />
                            </button>
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-thumbs-down" />
                            </button>
                            <button className="btn btn-transparent p-0 ml-3 font-weight-bold">
                              Reply
                            </button>
                          </div>
                        </div>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                          scelerisque ante sollicitudin. Cras purus odio, vestibulum
                          in vulputate at, tempus viverra turpis. Fusce condimentum
                          nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                          in faucibus.
                        </p>
                      </div>
                    </div>
                    <div className="media media-reply">
                      <img
                        className="mr-3 circle-rounded"
                        src="images/avatar/2.jpg"
                        width={50}
                        height={50}
                        alt="Generic placeholder image"
                      />
                      <div className="media-body">
                        <div className="d-sm-flex justify-content-between mb-2">
                          <h5 className="mb-sm-0">
                            Milan Gbah{" "}
                            <small className="text-muted ml-3">
                              about 3 days ago
                            </small>
                          </h5>
                          <div className="media-reply__link">
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-thumbs-up" />
                            </button>
                            <button className="btn btn-transparent p-0 mr-3">
                              <i className="fa fa-thumbs-down" />
                            </button>
                            <button className="btn btn-transparent p-0 ml-3 font-weight-bold">
                              Reply
                            </button>
                          </div>
                        </div>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                          scelerisque ante sollicitudin. Cras purus odio, vestibulum
                          in vulputate at, tempus viverra turpis. Fusce condimentum
                          nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                          in faucibus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>

  );
}
export default Profile;