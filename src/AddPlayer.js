import React, { Component } from 'react';
import './AddPlayer.css'

class AddPlayer extends Component {
    state = {
        name: null,
        age: null,
        position: null,
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addPlayer(this.state);
    }

    render() {
        return (
            <div className='add-player'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' onChange={this.handleChange} />
                    <label htmlFor='age'>Age:</label>
                    <input type='text' id='age' onChange={this.handleChange} />
                    <label htmlFor='position'>Position:</label>
                    <input type='text' id='position' onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPlayer;