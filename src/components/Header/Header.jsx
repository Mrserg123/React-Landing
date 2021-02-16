import React from 'react';
import './Header.css'
function Header(){
   
return(
 
  <header className='header'>
    <div className='logo'></div>
    <div className='text-header' >Be sure you put your  feetin <br/><b> the right place</b></div>
    <div className='block-header'>
  <input className='input-header' placeholder='Enter your zip code'></input>
  <div className='block-picture'></div>
  <div className='text-block'>Lorem ipsum dolor sit amet consectetur.</div>
<button className='button-header'>PRESS ME</button>

</div>
  </header> 


)
}
export default Header