import React from 'react'

export default function Book(props) {
    return (
        <div>
            <img src={props.img}></img>
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <button type="button" class="btn btn-info" onClick={() => props.addBookToFavorite(props.data)}>Add to Favorite</button>
            {'  '}
            <button type="button" class="btn btn-warning" onClick={() => props.addBookToCart(props.data)}>Add to Cart</button>

        </div>
    )
}