import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = { bookList: [] }

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {this.setState({bookList})})
    console.log(this.state)
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks />
        )}/>
        <Route path="/search" render={() => (
          <Search />
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
