import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
    

    state = {
        query: '',
        searchList: []
        }

    searchBooks = (event) => {
        console.log("event", event)
        const searchWord = event.target.value.trim()
        console.log("searchword", searchWord)
        this.setState({query: searchWord}, () => {
            if(this.state.query){
                console.log("in booksapi", this.state)
                BooksAPI.search(this.state.query).then((searchResult) => {
                    this.setState({searchList: searchResult})
                })
                
            }
            else {
                console.log("in else", this.state.searchList)
                this.setState({searchList: []})
            }
            console.log(this.state.query)})
        console.log("set state",this.state.query)

    }

    render() {

        console.log("in render")
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search">Close</a>
                <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.searchBooks}/>
                </div>
                </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchList.length > 0 ? (this.state.searchList.map((book, i) => <Book title={book.title} author={book.authors} thumbnail={book.imageLinks.thumbnail} key={i}/>)) :
                (<p>No results</p>)}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search