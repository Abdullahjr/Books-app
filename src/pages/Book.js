import React from 'react'

export default function Book(props) {
    return (
        <div>
            <img src={props.img}></img>
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <button onClick={() => props.addBookToFavorite(props.data)}>Add to Fav</button>
            {'  '}
            <button onClick={() => props.addBookToCart(props.data)}>Add to Cart</button>

        </div>
    )
}