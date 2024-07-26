 import React from 'react'
 import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import SuprSendInbox from '@suprsend/react-inbox'
import 'react-toastify/dist/ReactToastify.css' 
 
 export default function Navbar(props) {
   return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.tittle}</a>   
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About app
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/about">About us</a></li>
              <li><a className="dropdown-item" href="/">Home</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/"></a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
   <input className="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
   <label className="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>
</div>
<SuprSendInbox
   workspaceKey = "<workspace_key>"
   subscriberId = "<subscriber_id>"
  distinctId = "<distinct_id>" 
/>
      </div>
    </div>
  </nav>
   )
 }
 Navbar.propTypes={
        tittle:propTypes.string //usage of proptypes
 }
 