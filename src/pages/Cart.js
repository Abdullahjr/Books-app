import React from 'react';


const Cart = (props)=> {
  console.log(props.cartBooks);
      const lst = props.cartBooks.map((itm, idx)=> {
          return <div key={idx}>
          <img src={itm.image}></img>
          <h6 class="titleStyle">{itm.title}</h6>
          <h6>{itm.price}</h6>
          <button type="button" class="btn btn-link" onClick={()=>props.removeBookCart(itm)}>Remove</button>
          </div>
      })
      return(
          <div>
              <h1>Cart</h1>
              <button type="button" class="btn btn-link" onClick={()=>props.removeAllCart(lst)}>Remove All</button>
        {lst}
          </div>
      )
  }
export default Cart;
