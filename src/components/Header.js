import React from 'react';
import { moneyFormat } from '../helpers';
import Card from './Card';
//Header kısmını oluşturduk ve total sıfırdan büyükse, sıfıra eşitse ve money - total = 0 sa olacak olayları yazdık.
function Header({total,money}){
    return(
        <>
        <sectio class="nav"> <h1>HAYAL ETTİĞİN DÜNYA BURADA </h1>
        <div class="cabinet">
  <div>
    <div class="mirror"></div>
    <div class="bottle-amber"></div>
    <div class="skull"></div>
  </div>
  <div>
    <div class="abacus"></div>
    <div class="clock"></div>
    <div class="rubiks-cube"></div>
    <div class="snowglobe"></div>
    <div class="books"></div>
  </div>
  <div>
    <div class="eyeball-jar"></div>
    <div class="pressed-leaf"></div>
    <div class="egg-jar"></div>
    <div class="bowls"></div>
  </div>
  <div>
    <div class="flag"></div>
    <div class="balloon"></div>
    <div class="cardbox"></div>
    <div class="feathers"></div>
    <div class="planter"></div>
  </div>
  <div>
    <div class="camera"></div>
    <div class="polaroid"></div>
  </div>
  <div>
    <div class="pokeball"></div>
    <div class="woodbox"></div>
  </div>
  <div>
    <div class="tubes"></div>
    <div class="viewmaster"></div>
  </div>
  <div>
    <div class="lightsaber"></div>
  </div>
  <div>
    <div class="bugs-board">
      <div class="bugs"></div>
      <div class="bugs"></div>
      <div class="bugs"></div>
      <div class="bugs"></div>
    </div>
    <div class="bust"></div>
    <div class="tray"></div>
    <div class="bottle-amber"></div>
    <div class="pencils"></div>
    <div class="twine"></div>
  </div>
  <div>
    <div class="poster"></div>
    <div class="planets"></div>
    <div class="pressed-feather"></div>
    <div class="cloche-base"></div>
    <div class="cloche-cactus"></div>
  </div>
</div>
        <h3 class="span loader"><span class="m">H</span><span class="m">A</span><span class="m">Y</span><span class="m">A</span><span class="m">L</span><span class="m">&nbsp;</span><span class="m">M</span><span class="m">A</span><span class="m">R</span><span class="m">K</span><span class="m">E</span><span class="m">T</span></h3>
        </sectio>
        <Card/>
           {total >0 && money-total !== 0 &&  (
            <div className='header'>
            Harcamak için <span>{moneyFormat(money-total)} ₺ </span> paranız kaldı! 
            </div>
           )}
           {total ===0 && (
            <div className='header'><span>Harcamak için {moneyFormat(money)} ₺ </span> paranız var!</div>
           )}
           {money-total===0 &&(
            <div className='header'> Hiç paran kalmadı</div>
           ) }
           <style jsx>
            {`
            .header{
                position:sticky;
                top:0;
                background:linear-gradient(to bottom,#F72585,#7B2869);
                height:60px;
                display:flex;
                align-items:center;
                justify-content:center;
                color:white;
                font-size:24px;
                letter-spacing:1px;
                font-family:Century Gothic;



            }
            .header span{
                margin:0 10px;
                font-weight:bold;
                color:#03dac6;
                font-family:Century Gothic;
            }
            `}
           </style>
        </>
    )
}

export default Header;