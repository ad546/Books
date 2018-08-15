import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {

    render () {
        return (
            <div>
                <Link   
                    to='/search'
                    className='open-search'
                >Add Book</Link>
            </div>
        )
    }
    
    
}

export default ListBooks