import React, { Component } from 'react'
import Book from './Book'

export default class Books extends Component {
  render(){
    const bookList= this.props.books.map((book, index) =>{
      return <Book
                key={index}
                addBookToFavorite={this.props.addBookToFavorite}
                addBookToCart={this.props.addBookToCart}
                img={book.image}
                data={book}
                title={book.title}
                price={book.price}/>
    })
    return(
      <div>
        {bookList}
      </div>
    )
  }
}