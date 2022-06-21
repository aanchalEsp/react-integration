import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SideBar() {

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
                
                        </li>
                      
                        
                       
                               
                    </ul>
                </div>
            </div>  )
}
