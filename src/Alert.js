import React, { Component } from 'react';

class Alert extends Component {
    hide() {
        this.props.context.alert("", false, "");
    }

    render() {
        return (
            <div>
                {this.props.visible ? <div
                    className={this.props.type === "error" ? "alert alert-danger" :
                        "alert alert-success"} role="alert"
                    onClick={this.hide.bind(this)}
                    >{this.props.value}</div> : ""}
            </div>
        )
    }
}

export default Alert;