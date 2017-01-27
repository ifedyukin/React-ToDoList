import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <li className={this.props.check ? "list-group-item checked" : "list-group-item"}>
                <button className="btn check_btn" type="button">
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </button>
                {this.props.text}
                <button className="btn delete_btn" type="button">
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </button>
            </li>

            // <li className="list-group-item checked">
            //         <button className="btn check_btn" type="button">
            //             <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
            //         </button> Cras justo odioCras
            // 			<button className="btn delete_btn" type="button">
            //             <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            //         </button>
            //     </li>
        )
    }
}

export default Item;