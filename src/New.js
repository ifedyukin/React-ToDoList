import React, { Component } from 'react';

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userText: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.userText);
        this.setState({userText: ''});
    }

    handleTyping(event) {
        this.setState({userText: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="input-group">
                <input type="text" className="form-control" autoFocus
                    placeholder="What needs to be done? Search or add..."
                    value={this.state.userText}
                    onChange={this.handleTyping} />

                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                </span>
            </form>
        )
    }
}

export default New;