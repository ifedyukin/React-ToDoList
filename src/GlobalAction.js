import React, { Component } from 'react';

class GlobalAction extends Component {
    render() {
        return (
            <div className="clear_completed">
                <div className="btn-group" role="group">
                    <button onClick={this.props.context.checkAll} type="button" className="btn btn-success">
                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
                    <button onClick={this.props.context.deleteCompleted} type="button" className="btn btn-danger">
                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                </div>
            </div>
        )
    }
}

export default GlobalAction;