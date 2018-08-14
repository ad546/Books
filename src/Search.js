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
                    if (searchResult.error) {
                        console.log("error")
                    }
                    else {
                        console.log("searchResult", searchResult)
                        searchResult.map((book, i) => (!book.hasOwnProperty('imageLinks')) ? (book.imageLinks = {}) : (console.log('lol1')))
                        searchResult.map((book, i) => (!book.imageLinks.hasOwnProperty('thumbnail')) ? (book.imageLinks.thumbnail = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg") : (console.log('lol')))
                    }
                    return this.setState({searchList: searchResult})
                })
                
            }
            else {
                console.log("in else", this.state.searchList)
                this.setState({searchList: []})
            }

            console.log(this.state.query)})
        console.log("set state",this.state.query)

    }

    checkImage(searchList) {
        console.log("check image", searchList)
    }

    render() {

        console.log("in render", this.state)
        console.log("in render", this.state.searchList.length)
        
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