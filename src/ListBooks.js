// eslint-disable-next-line
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends React.Component {

    state = {
        wantToRead: [],
        currentlyReading: [],
        booksRead: []
    }

    render () {

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
                                    {this.state.currentlyReading.map((book, i) => <Book title={book.title} author={book.authors} thumbnail={book.thumbnail} key={i}/>)}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.state.wantToRead.map((book, i) => <Book title={book.title} author={book.authors} thumbnail={book.thumbnail} key={i}/>)}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.state.booksRead.map((book, i) => <Book title={book.title} author={book.authors} thumbnail={book.thumbnail} key={i}/>)}
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