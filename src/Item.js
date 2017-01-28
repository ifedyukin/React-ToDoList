import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <li className={this.props.checked ? "list-group-item checked" : "list-group-item"}>
                <button className="btn check_btn" type="button">
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </button>
                {this.props.value}
                <button className="btn delete_btn" type="button">
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </button>
            </li>
        )
    }
}

export default Item;