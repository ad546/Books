import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
    

    state = {
        query: '',
        searchList: []
    }

    searchBooks = (event) => {
        const searchWord = event.target.value.trim()

        this.setState({query: searchWord})

        if(this.state.query){
            BooksAPI.search(this.state.query).then((searchResult) => {
                this.setState({searchList: searchResult})
            })
            
        }
        else {
            this.setState({searchList: []})
        }
    }
    render() {
        
        console.log(this.state.searchList)
        
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
                {this.state.searchList.map((book, i) => <Book title={book.title} author={book.authors} thumbnail={book.imageLinks.thumbnail} key={i}/>)}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search