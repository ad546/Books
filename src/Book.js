import React, { Component } from 'react'

class Book extends Component {
    state = {
      title: "",
      authors: "",
      thumbnail: "",
      value: "none"
    }

    changeStatus = (event) => {
      this.setState({title: this.props.title, authors: this.props.author, thumbnail: this.props.thumbnail, value: event.target.value},
      () => {
        this.props.updateListBooks(this.state)
        // console.log("props", this.props)
        console.log("Book", this.state)
      })
    }

    render() {
        
        return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: "url(" + this.props.thumbnail + ")"}}></div>
            <div className="book-shelf-changer">
              <select onChange={this.changeStatus}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{ this.props.title }</div>
          <div className="book-authors">{ this.props.author }</div>
        </div>
        )
    }
}

export default Book