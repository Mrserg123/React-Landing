import React from 'react';
import './Footer.css';
import phone from './phone.png';
import laptop from './laptop.png';
function Footer(){
    return(
    
      <footer className='footer'>

       <div className='sec1'>
        <div> <img src={phone} alt="Phone" style={{height: 250,marginTop:120}}/></div>
<div className='sec1-title' style={{textAlign:'center'}}>This is a Heading</div>
<div className='sec1-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis libero assumenda labore, 
voluptates nostrum molestiae? Quo nulla quibusdam commodi quos, deserunt voluptatibus quasi, saepe error voluptatum 
dolor ullam rerum veritatis nemo. Doloremque, vitae. Velit inventore reprehenderit non, expedita accusamus maxime?</div>
<div className='sec1-text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis libero assumenda labore, 
voluptates nostrum molestiae? Quo nulla quibusdam commodi quos, deserunt voluptatibus quasi, saepe error voluptatum 
dolor ullam rerum veritatis nemo. Doloremque, vitae. Velit inventore reprehenderit non, expedita accusamus maxime?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi dolorum itaque, illo tempore dicta minima
 earum quia aperiam explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero provident, minus
  porro iusto nobis? Sint ea, magni nisi nihil, voluptatum officia voluptates 
 sunt esse repellendus iure maxime animi consequuntur ipsa nemo aliquam modi tempore explicabo aut quod. Adipisci, quibusdam.
</div>
       </div>

       <div className='sec2'>
      <div><img src={laptop} alt="Laptop" style={{marginTop:100}}/></div>
      <div className='block-centr'>
      <div className='sec2-title'>This is a Heading</div>
      <div className='sec2-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem 
      tenetur commodi culpa possimus quibusdam recusandae esse, nesciunt, nobis reprehenderit ullam omnis. Nisi corporis 
      accusantium vel quibusdam quas, fugit numquam dolores adipisci illo non . Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Nihil laudantium praesentium ad aut obcaecati assumenda earum ratione ullam in ea! </div>
      <form action="#" target="_blank">
      <button className='button-footer' >Download</button>
      </form>
      </div>
       </div>

      <div className='footer-map'>
<div className='footer-form-img'>
   <input placeholder='Name' className='footer-input' style={{marginTop:50}}></input>
   <input placeholder='email-address' className='footer-input'></input>
   <input placeholder='Message' className='footer-input' style={{paddingBottom:50}}></input>
  <div className='footer-button'></div>
</div>
      </div>

       </footer>
        )
       } 
    export default Footer