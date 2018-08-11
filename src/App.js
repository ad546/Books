import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class BooksApp extends Component {
  

  render() {
    return (
      <div className="app">
      <Book />
      </div>
    )
  }
}

export default BooksApp
