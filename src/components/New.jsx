import React, { Component, PropTypes } from 'react';

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }
    
    static propTypes = {
        handleSearch: PropTypes.func.isRequired,
        handleAdd: PropTypes.func.isRequired
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAdd(this.state.value);
        this.setState({ value: '' });
    }

    handleTyping(event) {
        this.setState({ value: event.target.value });
        this.props.handleSearch(event.target.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="input-group">
                <input type="text" className="form-control" autoFocus
                    placeholder="What needs to be done? Search or add..."
                    value={this.state.value}
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