import React, { Component } from 'react';

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

    check() {
        this.props.context.checkItem(this.props.id);
    }

    delete() {
        this.props.context.deleteItem(this.props.id);
    }

    edit() {
        this.setState({ editable: true });
    }

    handleTyping(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.context.editItem(this.props.id, this.state.value);
    }

    render() {
        return (
            <li onDoubleClick={this.edit.bind(this)} className={this.props.checked ? "list-group-item checked" : "list-group-item"}>
                <button className="btn check_btn" type="button"
                    onClick={this.check.bind(this)}>
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </button>
                {this.state.editable ? <form onSubmit={this.handleSubmit}>
                    <input className="editableItem form-control"
                        type="text" autoFocus
                        value={this.state.value}
                        onChange={this.handleTyping} 
                        placeholder={this.props.value}/> </form> :
                    <span>{this.props.value}</span>}

                {this.state.editable ? "" :
                    <button className="btn delete_btn" type="button"
                        onClick={this.delete.bind(this)}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>}

            </li>
        )
    }
}

export default Item;