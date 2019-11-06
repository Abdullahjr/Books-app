import React from 'react'

export default function Book(props) {
    return (
        <div>
            <img src={props.img}></img>
            <h6 class= "titleStyle">{props.title}</h6>
            <h6>{props.price}</h6>
            <button type="button" class="btn btn-info" onClick={() => props.addBookToFavorite(props.data)}>Add to Favorite</button>
            {'  '}
            <button type="button" class="btn btn-warning" onClick={() => props.addBookToCart(props.data)}>Add to Cart</button>

        </div>
    )
}