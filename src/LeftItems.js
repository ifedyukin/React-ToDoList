import React, { Component } from 'react';

class LeftItems extends Component {
    render() {
        return (
            <div className="left_count">
                <span className="label label-default">{this.props.value} item left</span>
            </div>
        )
    }
}

export default LeftItems;