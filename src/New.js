import React, { Component } from 'react';

class New extends Component {
    render() {
        return (
            <form className="input-group">
                <input type="text" className="form-control" autoFocus 
                    placeholder="What needs to be done? Search or add..." />
                    
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                </span>
            </form>
        )
    }
}

export default New;