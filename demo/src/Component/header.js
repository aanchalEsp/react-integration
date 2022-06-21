import React from 'react'
import config from '../config/config';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function Header() {

    function logout() {
        Cookies.remove('loginSuccessDemoProject');
        setTimeout(() => {
            window.location.href = `${config.baseUrl}`
        });
    }
  return (
    <div className="header">
  
  <div className="header-content clearfix">
    <div className="nav-control">
      <div className="hamburger">
        <span className="toggle-icon">
          <i className="icon-menu" />
        </span>
      </div>
    </div>
    <div className="header-left">
      <div className="input-group icons">
        <div className="input-group-prepend">
          <span
            className="input-group-text bg-transparent border-0 pr-2 pr-sm-3"
            id="basic-addon1"
          >
            <i className="mdi mdi-magnify" />
          </span>
        </div>
        <input
          type="search"
          className="form-control"
          placeholder="Search Dashboard"
          aria-label="Search Dashboard"
        />
        <div className="drop-down animated flipInX d-md-none">
          <form action="#">
            <input type="text" className="form-control" placeholder="Search" />
          </form>
        </div>
      </div>
    </div>
    <div className="header-right">
      <ul className="clearfix">
        <li className="icons dropdown">
          <a href="javascript:void(0)" data-toggle="dropdown">
            <i className="mdi mdi-email-outline" />
            <span className="badge badge-pill gradient-1">3</span>
          </a>
          <div className="drop-down animated fadeIn dropdown-menu">
            <div className="dropdown-content-heading d-flex justify-content-between">
              <span className="">3 New Messages</span>
              <a href="javascript:void()" className="d-inline-block">
                <span className="badge badge-pill gradient-1">3</span>
              </a>
            </div>
            <div className="dropdown-content-body">
              <ul>
                <li className="notification-unread">
                  <a href="javascript:void()">
                    <img
                      className="float-left mr-3 avatar-img"
                      src="images/avatar/1.jpg"
                      alt=""
                    />
                    <div className="notification-content">
                      <div className="notification-heading">Saiful Islam</div>
                      <div className="notification-timestamp">08 Hours ago</div>
                      <div className="notification-text">
                        Hi Teddy, Just wanted to let you ...
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-unread">
                  <a href="javascript:void()">
                    <img
                      className="float-left mr-3 avatar-img"
                      src="images/avatar/2.jpg"
                      alt=""
                    />
                    <div className="notification-content">
                      <div className="notification-heading">Adam Smith</div>
                      <div className="notification-timestamp">08 Hours ago</div>
                      <div className="notification-text">
                        Can you do me a favour?
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void()">
                    <img
                      className="float-left mr-3 avatar-img"
                      src="images/avatar/3.jpg"
                      alt=""
                    />
                    <div className="notification-content">
                      <div className="notification-heading">Barak Obama</div>
                      <div className="notification-timestamp">08 Hours ago</div>
                      <div className="notification-text">
                        Hi Teddy, Just wanted to let you ...
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void()">
                    <img
                      className="float-left mr-3 avatar-img"
                      src="images/avatar/4.jpg"
                      alt=""
                    />
                    <div className="notification-content">
                      <div className="notification-heading">Hilari Clinton</div>
                      <div className="notification-timestamp">08 Hours ago</div>
                      <div className="notification-text">Hello</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="icons dropdown">
          <a href="javascript:void(0)" data-toggle="dropdown">
            <i className="mdi mdi-bell-outline" />
            <span className="badge badge-pill gradient-2">3</span>
          </a>
          <div className="drop-down animated fadeIn dropdown-menu dropdown-notfication">
            <div className="dropdown-content-heading d-flex justify-content-between">
              <span className="">2 New Notifications</span>
              <a href="javascript:void()" className="d-inline-block">
                <span className="badge badge-pill gradient-2">5</span>
              </a>
            </div>
            <div className="dropdown-content-body">
              <ul>
                <li>
                  <a href="javascript:void()">
                    <span className="mr-3 avatar-icon bg-success-lighten-2">
                      <i className="icon-present" />
                    </span>
                    <div className="notification-content">
                      <h6 className="notification-heading">Events near you</h6>
                      <span className="notification-text">
                        Within next 5 days
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void()">
                    <span className="mr-3 avatar-icon bg-danger-lighten-2">
                      <i className="icon-present" />
                    </span>
                    <div className="notification-content">
                      <h6 className="notification-heading">Event Started</h6>
                      <span className="notification-text">One hour ago</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void()">
                    <span className="mr-3 avatar-icon bg-success-lighten-2">
                      <i className="icon-present" />
                    </span>
                    <div className="notification-content">
                      <h6 className="notification-heading">
                        Event Ended Successfully
                      </h6>
                      <span className="notification-text">One hour ago</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void()">
                    <span className="mr-3 avatar-icon bg-danger-lighten-2">
                      <i className="icon-present" />
                    </span>
                    <div className="notification-content">
                      <h6 className="notification-heading">Events to Join</h6>
                      <span className="notification-text">After two days</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="icons dropdown d-none d-md-flex">
          <a
            href="javascript:void(0)"
            className="log-user"
            data-toggle="dropdown"
          >
            <span>English</span>{" "}
            <i className="fa fa-angle-down f-s-14" aria-hidden="true" />
          </a>
          <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
            <div className="dropdown-content-body">
              <ul>
                <li>
                  <a href="javascript:void()">English</a>
                </li>
                <li>
                  <a href="javascript:void()">Dutch</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="icons dropdown">
          <div
            className="user-img c-pointer position-relative"
            data-toggle="dropdown"
          >
            <span className="activity active" />
            <img src="images/user/1.png" height={40} width={40} alt="" />
          </div>
          <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
            <div className="dropdown-content-body">
              <ul>
                <li>
                  <a href="app-profile.html">
                    <i className="icon-user" /> <Link to={`${config.baseUrl}profile`}><span>Profile</span></Link>
                  </a>
                </li>
                <li>
                  <a href="javascript:void()">
                    <i className="icon-envelope-open" /> <span>Inbox</span>{" "}
                    <div className="badge gradient-3 badge-pill gradient-1">
                      3
                    </div>
                  </a>
                </li>
                <hr className="my-2" />
                <li>
                  <a href="page-lock.html">
                    <i className="icon-lock" /> <span>Lock Screen</span>
                  </a>
                </li>
                <li>
                
                <Link to="#" onClick={logout}>  <i className="icon-key"/> <span>Logout</span></Link>
               
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}
