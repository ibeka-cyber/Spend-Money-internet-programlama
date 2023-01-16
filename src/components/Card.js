import React from 'react';
function Card(){

  
  function myFunction() {
    

    var x = document.getElementById('dis');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
    } else {
        x.style.display = 'none';
    }
   
   
  }

return (
<div class="container2">
  <div class="card card0">
    <div class="border">	
      <h2>Jeff Bezos</h2>
      <div class="btn"><a onClick={myFunction} >HARCA</a>
    </div>
    </div>
  </div>
  <div class="card card1">
    <div class="border2">
      <h2>Larry Ellison</h2>
      <div class="btn"><a onClick={myFunction}>HARCA</a>
    </div>
  </div>
  </div>
  <div class="card card2">
    <div class="border2">
      <h2>Elon Musk</h2>
      <div class="btn"><a onClick={myFunction}> HARCA</a>
    </div>
  </div>
  </div>
  <div class="card card3">
    <div class="border">
      <h2>Mark Zuckerberg</h2>
      <div class="btn"><a onClick={myFunction}>HARCA</a>
    </div>
  </div>
  </div>
</div>

)



}

export default Card;

