// eslint-disable-next-line
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends React.Component {

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
                                    {this.props.books.filter(book => book.shelf === 'currentlyReading').map((book, i) => <Book changeStatus={this.props.changeStatus} book={book} key={i}/>)}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.books.filter(book => book.shelf === 'wantToRead').map((book, i) => <Book changeStatus={this.props.changeStatus} book={book} key={i}/>)}
                                    </ol>
                                </div>
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.books.filter(book => book.shelf === 'read').map((book, i) => <Book changeStatus={this.props.changeStatus} book={book} key={i}/>)}
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