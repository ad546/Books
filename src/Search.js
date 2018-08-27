import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class Search extends Component {
    

    state = {
        query: '',
        searchList: []
        }

    searchBooks = (event) => {
        const searchWord = event.target.value.trim()
        this.setState({query: searchWord}, () => {
            if(this.state.query){
                BooksAPI.search(this.state.query).then((searchResult) => {
                    this.setState({searchList: searchResult}, () => {
                    
                    })
                })
                
            }
            else {
                this.setState({searchList: []}, () => {
                })  
            }
        })

    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.searchBooks}/>
                </div>
                </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchList.length > 0 ? (this.state.searchList.map((book, i) => <Book changeStatus={this.props.changeStatus} books={this.props.books} book={book} key={i}/>)) :
                (<p>No results</p>)}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search