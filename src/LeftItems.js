import React, { Component } from 'react';

class LeftItems extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="left_count">
                <span className="label label-default">{this.props.count} item left</span>
            </div>
        )
    }
}

export default LeftItems;