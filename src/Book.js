import React, { Component } from 'react'

class Book extends Component {
    checkforImage = () => {
      if (!this.props.book.hasOwnProperty('imageLinks')) {
        this.props.book.imageLinks = {}
        this.props.book.imageLinks.thumbnail = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
      }
    }

    checkforBooks = () => {
      for (let item of this.props.books) {
        if (item.id === this.props.book.id){
          this.props.book.shelf = item.shelf
          break
          }
        else {
          this.props.book.shelf = "none"
          console.log(item, "else")
        }     
      }
    }

    render() {
      if (this.props.books){
        this.checkforBooks()
      }
        this.checkforImage()
        return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")"}}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => this.props.changeStatus(event, this.props.book)} value={this.props.book.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{ this.props.book.title }</div>
          <div className="book-authors">{ this.props.book.authors }</div>
        </div>
        )
    }
}

export default Book