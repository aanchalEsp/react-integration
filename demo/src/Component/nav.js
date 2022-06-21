import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import config from '../config/config';

export default function Nav() {
  return (
    <> 
    <div className="nav-header">
            <div className="brand-logo">
                <a href="index.html">
                    <b className="logo-abbr"><img src="images/logo.png" alt=""/> </b>
                    <span className="logo-compact"><img src="./images/logo-compact.png" alt=""/></span>
                    <span className="brand-title">
                        <img src="images/logo-text.png" alt=""/>
                    </span>
                </a>
            </div>
            
        </div>  
      
      </>
        )
}
