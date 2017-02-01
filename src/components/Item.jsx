import React, { Component, PropTypes } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            value: this.props.value
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        checkItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        editItem: PropTypes.func.isRequired
    }

    handleTyping(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.editItem(this.props.id, this.state.value);
    }

    render() {
        return (
            <li onDoubleClick={() => this.setState({ editable: true })}
                className={this.props.checked ? "list-group-item checked" : "list-group-item"}>

                <button className="btn check_btn" type="button"
                    onClick={() => this.props.checkItem(this.props.id)}>
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </button>

                {this.state.editable ? <form onSubmit={this.handleSubmit}>
                    <input className="editableItem form-control"
                        type="text" autoFocus
                        value={this.state.value}
                        onChange={this.handleTyping}
                        placeholder={this.props.value} /> </form> :
                    <span>{this.props.value}</span>}

                {this.state.editable ? "" :
                    <button className="btn delete_btn" type="button"
                        onClick={() => this.props.deleteItem(this.props.id)}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>}

            </li>
        )
    }
}

export default Item;