import React from 'react';


const Favorite = (props)=> {
console.log(props.favoriteBooks);
    const list = props.favoriteBooks.map((item, index)=> {
        return <div key={index}>
        <img src={item.image}></img>
        <h1>{item.title}</h1>
        <h2>{item.price}</h2>
        <button onClick={()=>props.removeBookFave(item)}>Remove</button>{' '}

        </div>
    })
    return(
        <div>
            <h1>Favorite</h1>
            <button onClick={()=>props.removeAllFave(list)}>Delete All</button>


      {list}
        </div>
    )
}
export default Favorite;
