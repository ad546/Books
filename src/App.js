import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Search from './Search'
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getStoredBooks()
  }

  getStoredBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeStatus = (event, book) => {
    let shelf = event.target.value
    BooksAPI.update(book, shelf).then(() => {
      this.getStoredBooks()
    })
  }
  
  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} changeStatus={this.changeStatus}/>
        )}/>
        <Route path="/search" render={() => (
          <Search books={this.state.books} changeStatus={this.changeStatus}/>
        )}/>
      </Switch>
      </div>
    )
  }
}

export default BooksApp
