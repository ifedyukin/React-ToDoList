import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
    render() {
        return (
            <ul className="list-group items_list">
                <Item text="Test" check/>           
                <Item text="Lorem Ipsum DOlor"/>                
            </ul>
        )
    }
}

export default List;