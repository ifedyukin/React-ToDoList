import React, { Component } from 'react';

import New from './New';
import List from './List';
import LeftItems from './LeftItems';
import ListSelector from './ListSelector';
import GlobalAction from './GlobalAction';

class Panel extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <New />
                    <List />
                </div>

                <div className="panel-footer">
                    <LeftItems count='7' />
                    <ListSelector />
                    <GlobalAction />
                </div>
            </div >
        )
    }
}

export default Panel;