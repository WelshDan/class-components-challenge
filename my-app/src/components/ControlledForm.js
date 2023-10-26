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
        this.setState({
            name: event.target.value
        })
    }
    handleCategoryChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleCommentChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
    }
}

export default ControlledForm