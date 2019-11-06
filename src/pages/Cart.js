import React from 'react';


const Cart = (props)=> {
  console.log(props.cartBooks);
      const lst = props.cartBooks.map((itm, idx)=> {
          return <div key={idx}>
          <img src={itm.image}></img>
          <h1>{itm.title}</h1>
          <h2>{itm.price}</h2>
          <button onClick={()=>props.removeBookCart(itm)}>Remove</button>
          </div>
      })
      return(
          <div>
              <h1>Cart</h1>
              <button type="button" class="btn btn-link" onClick={()=>props.removeAllCart(lst)}>Delete All</button>
        {lst}
          </div>
      )
  }
export default Cart;
