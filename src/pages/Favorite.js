import React from 'react';


const Favorite = (props)=> {
console.log(props.favoriteBooks);
    const list = props.favoriteBooks.map((item, index)=> {
        return <div  key={index}>
        <img src={item.image}></img>
        <h6 class="titleStyle">{item.title}</h6>
        <h6>{item.price}</h6>
        <button type="button" class="btn btn-link" onClick={()=>props.removeBookFave(item)}>Remove</button>{' '}

        
        </div>
    })
    return(
        <div>
            <h1>Favorite</h1>
            <button type="button" class="btn btn-link" onClick={()=>props.removeAllFave(list)}>Remove All</button>
      {list}
        </div>
    )
}
export default Favorite;
