import React, { Component } from 'react'
import "./App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Errors from './pages/Errors';
import axios from "axios"


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      favoriteBooks: [],
      cartBooks: []
    }
  }
 componentDidMount(){
  axios({
    url: 'https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/new',
    method: 'get',
  })
  .then((response) => {
    console.log(response);
    this.setState({
      books: response.data.books
    })
  }) 
  .catch((error)=>{
  }) 

 } 

 addBookToFavorite = (book) => {
  const favoriteBooks = [...this.state.favoriteBooks, book];
console.log(book);

 this.setState({favoriteBooks})
}

addBookToCart = (book) => {
  const cartBooks = [...this.state.cartBooks, book];
console.log(book);

 this.setState({cartBooks})
}

removeBookFave = (book)=> {
  const list = [...this.state.favoriteBooks]
  const index = list.indexOf(book)
  list.splice(index, 1)
  this.setState({
    favoriteBooks: list
  })
}

removeBookCart = (book)=> {
  const lst = [...this.state.cartBooks]
  const idex = lst.indexOf(book)
  lst.splice(idex, 1)
  this.setState({
    cartBooks: lst
  })
}
removeAllFave = (book)=> {
  const list = [...this.state.favoriteBooks]
  const index = list.indexOf(book)
  list.splice(index, 1)
  this.setState({
    favoriteBooks: []
  })
}
removeAllCart = (book)=> {
  const lst = [...this.state.cartBooks]
  const idex = lst.indexOf(book)
  lst.splice(idex, 1)
  this.setState({
    cartBooks: []
  })
}
  render() {
  return (
    <Router>
      <nav>
        <Link className="pressed" to='/'>Home</Link>{' | '}
        <Link to='/books'>Books</Link>{' | '}
        <Link to='/favorite'>Favorite</Link>{' | '}
        <Link to='/cart'>Cart</Link>
      </nav>
      <div>
        <Switch>
      <Route exact path='/' component={Home}/>
       <Route  path='/favorite' component={()=> <Favorite
        removeAllFave={this.removeAllFave} removeBookFave={this.removeBookFave}
        favoriteBooks={this.state.favoriteBooks} />} />
        <Route  path='/cart' component={()=> <Cart removeAllCart={this.removeAllCart}
        removeBookCart={this.removeBookCart} cartBooks={this.state.cartBooks} />} />
        <Route  path='/books' component={() => <Books books={this.state.books}
        addBookToFavorite={this.addBookToFavorite} 
        addBookToCart={this.addBookToCart}/>}/>
        <Route  component={Errors}/>
        </Switch>
      </div>
    </Router>
  );
 }
}