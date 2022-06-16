import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SideBar() {
    const navigate = useNavigate();

  return (
<div className="nk-sidebar">
                <div className="nk-nav-scroll">
                    <ul className="metismenu" id="menu">
                        <li className="nav-label">Dashboard</li>
                        <li>
                            <a
                                className="has-arrow"
                                href="javascript:void()"
                                aria-expanded="false"
                            >
                                <i className="icon-speedometer menu-icon" />
                                <span className="nav-text">Dashboard</span>
                            </a>
                            <ul aria-expanded="false">
                                <li>
                                    <a href="./index.html">Home 1</a>
                                </li>
                                {/* <li><a href="./index-2.html">Home 2</a></li> */}
                            </ul>
                        </li>
                      
                        
                       
                               
                    </ul>
                </div>
            </div>  )
}
