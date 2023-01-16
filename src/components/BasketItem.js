import React from 'react';
//Bu fonksiyonda sepete atılan ürünün ismini ve kaç adet alındığını listeledik.
function BasketItem({item, product}){
    return (
      <>
      <li className='basket-item'>
        {product.title} x <span> {item.amount} </span>
      </li> 
      <style jsx>{`
      .basket-item{
        padding-bottom: 10px;
        font-size:17px;
      }

      .basket-item span{
        color:#999;
      }
        
        `}</style>

      </>
   
    )
}

export default BasketItem