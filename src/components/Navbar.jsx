import React from 'react'
import {Link} from 'react-router-dom'


function Navbar(props){
    return(

<nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label="Fifth navbar example">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        
        {/* <form role="search" className='d-flex'>
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className='btn btn-outline-success' type='submit'>Submit</button>
        </form> */}
      </div>
    </div>
  </nav>
    )};

    export default Navbar;