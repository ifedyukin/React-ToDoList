import React, { Component, PropTypes } from 'react';

class GlobalAction extends Component {
    static propTypes = {
        checkAll: PropTypes.func.isRequired,
        deleteCompleted: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="clear_completed">
                <div className="btn-group" role="group">
                    <button onClick={this.props.checkAll} type="button" className="btn btn-success">
                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                    </button>
                    <button onClick={this.props.deleteCompleted} type="button" className="btn btn-danger">
                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        )
    }
}

export default GlobalAction;