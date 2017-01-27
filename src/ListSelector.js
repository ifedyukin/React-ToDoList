import React, { Component } from 'react';

class ListSelector extends Component {
    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary">All</button>
                <button type="button" className="btn btn-default">Active</button>
                <button type="button" className="btn btn-default">Completed</button>
            </div>
        )
    }
}

export default ListSelector;