import React, { Component } from 'react'
import { Route } from 'react-router'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = {
    wantToRead: [],
    currentlyReading: [],
    booksRead: []
  }

  updateListBooks = (state) => {
    if (state.value === "wantToRead") {
      this.state.wantToRead.push({state})
    }
    else if (state.value === "currentlyReading") {
      this.state.currentlyReading.push({state})
    }
    else if (state.value === "read") {
      this.state.booksRead.push({state})
    }
    else {
      
    }
    
    console.log("in APP")
    console.log(this.state.wantToRead)
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks updateListBooks={this.updateListBooks} currentlyReading={this.state.currentlyReading} wantToRead={this.state.wantToRead} booksRead={this.state.booksRead}/>
        )}/>
        <Route path="/search" render={() => (
          <Search updateListBooks={this.updateListBooks}/>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
