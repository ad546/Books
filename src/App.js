import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import Search from './Search'

class BooksApp extends Component {
  state = { bookList: [] }

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {this.setState({bookList})})
    console.log(this.state)
  }

  render() {

    return (
      <div className="app">
        <Search />
      </div>
    )
  }
}

export default BooksApp
