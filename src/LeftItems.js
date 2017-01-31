import React, { Component, PropTypes } from 'react';

class LeftItems extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired
    }

    render() {
        return (
            <div className="left_count">
                <span className="label label-default">{this.props.value} item left</span>
            </div>
        )
    }
}

export default LeftItems;