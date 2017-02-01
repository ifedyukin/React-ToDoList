import React, { Component, PropTypes } from 'react';

class Alert extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired,
        type: PropTypes.string.isRequired,
        hide: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                {this.props.visible ? <div
                    className={this.props.type === "error" ? "alert alert-danger" :
                        "alert alert-success"} role="alert"
                    onClick={this.props.hide}
                    >{this.props.value}</div> : ""}
            </div>
        )
    }
}

export default Alert;