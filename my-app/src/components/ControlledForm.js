import React, { Component } from 'react';

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

            this.state = {
                name: '',
                category: 'website',
                comments:'',
        }
    }

    handleNameChange = (event) => {
        this.state({
            name: event.target.value
        })
    }
    handleCategoryChange = (event) => {
        this.state({
            name: event.target.value
        })
    }
    handleCommentChange = (event) => {
        this.state({
            name: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select
                            id="id-category"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleCategoryChange}
                        >
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name"
                            name={this.state.comments}
                            onChange={this.handleCommentsChange}
                        />
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm