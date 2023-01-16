import React from 'react';
import BasketItem from './BasketItem';

function Basket({basket,products,total,resetBasket}){
return (
    <>
     <div className="basket-container container">
      <h3> Alışveriş Detayları</h3>
      <ul>
     {basket.map(item=>( //baskette itemleri döndürdük. BasketItem bileşenini kullanarak
       <BasketItem key={item.id} item={item} product={products.find(p=> p.id === item.id)} />
     ))}
     </ul>
     {total >0 &&( //total büyükse sıfırdan basketin gözükmesini istedik.
        <div>
     <div className='total'>
        Toplam: {total} ₺
     </div>
      <button className='custom-btn btn-15' onClick={resetBasket}>Sepeti Sıfırla</button>
      </div>
      )}
     </div>
     <style jsx>{`
        .basket-container{
         padding:20px;
         background:#fff;
         border:1px solid #ddd;
        }

        .basket-container h3{
         font-size:20px;
         margin-bottom:15px;
        }

        .basket-container .total{
         border-top:1px solid #ddd;
         padding-top:10px;
         margin-top:10px;
         font-size:18px;
         font-weight:bold;
         text-align:right;
         color:#179b17;
         font-family:Century Gothic;

        }

        h3{
         font-family:Century Gothic;
         color:#ff0077;
        }

        ul{
         font-family:Century Gothic;
        }

        `}</style>
    </>
)
}

export default Basket;