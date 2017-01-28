import React, { Component, PropTypes } from 'react';

import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.filter(this.props.items, this.props.type, this.props.search)
        }
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                checked: PropTypes.bool.isRequired
            })
        )
    }

    filter(items, type, search) {
        let result = [];
        if (type === "active") {
            for (let i = 0; i < items.length; i++) {
                if (!items[i].checked) {
                    if (items[i].value.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                        result.push(items[i]);
                    }
                }
            }
        } else if (type === "completed") {
            for (let i = 0; i < items.length; i++) {
                if (items[i].checked) {
                    if (items[i].value.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                        result.push(items[i]);
                    }
                }
            }
        } else {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                    result.push(items[i]);
                }
            }
        }
        return result;
    }

    render() {
        return (
            <ul className="list-group items_list">
                {this.state.items.map((item, index) =>
                    <Item value={item.value} key={index} checked={item.checked} />
                )}
            </ul>
        )
    }
}

export default List;