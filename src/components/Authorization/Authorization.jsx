import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";


function Authorization() {
  const fetch = require('node-fetch')

  let history = useHistory();

  function handleClick() {
    history.push("/app");
    alert('Sign in...')
 
  }
  async function fet() {
    let response = await fetch('https://5f90137de0559c0016ad5ffa.mockapi.io/gd/ewrrwe');
    if (response.ok) {
      let button = document.querySelector("button");
      button.addEventListener("click", handleClick)
     
    } else {
        alert("Error HTTP: " + response.status);
    }
}
fet()

 return( 
 <div className="form">
  
    <div className="block">
      <div className='form-line'>Authorization</div>
      <div className='form-center'>
      <input className='form-input' type="text" placeholder='Login'/>
      <input type="text" className='form-input' placeholder='Password'/>
     <div className='form-button'><button className='form-style-but' type='button'>
       Log in
      </button></div> 
      </div>
    </div>

    </div>
  );
  
}
export default Authorization;