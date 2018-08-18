import React, { Component } from 'react'
import { Route } from 'react-router'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  changeStatus = (event, book) => {
    BooksAPI.update(book, event.target.value).then((books) => {
      this.componentDidMount()
    })
  }
  
  render() {
    
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} changeStatus={this.changeStatus}/>
        )}/>
        <Route path="/search" render={() => (
          <Search books={this.state.books} changeStatus={this.changeStatus}/>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
