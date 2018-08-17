// eslint-disable-next-line
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends React.Component {

    render () {
        console.log("LB props", this.props)
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    {this.props.currentlyReading.map((book, i) => <Book updateListBooks={this.props.updateListBooks} title={book.state.title} author={book.state.authors} thumbnail={book.state.thumbnail} value={book.state.value} key={i}/>)}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.wantToRead.map((book, i) => <Book updateListBooks={this.props.updateListBooks} title={book.state.title} author={book.state.authors} thumbnail={book.state.thumbnail} value={book.state.value} key={i}/>)}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.booksRead.map((book, i) => <Book updateListBooks={this.props.updateListBooks} title={book.state.title} author={book.state.authors} thumbnail={book.state.thumbnail} value={book.state.value} key={i}/>)}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link   
                        to='/search'
                        className='open-search'
                    >Add Book</Link>
                </div>
            </div>
        )
    }
    
    
}

export default ListBooks