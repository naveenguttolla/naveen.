import React from 'react'
import { Link } from 'react-router-dom';

import './App.css'
const Nav = () => {
  return (
    <>
    
    <div class="container">
        <div class="row">

        <div class="col-sm-6" >
        

        <img src='https://www.themealdb.com/images/logo-small.png'/>
        </div>
        
        <div class="col-sm-6">
        

        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to = '/'>
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">API</a>
        </li>
        
        
        
      </ul>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </div>

</nav>
    </div>
    </div>
    </div>
    <br/>
    </>
     )
    }
    export default Nav