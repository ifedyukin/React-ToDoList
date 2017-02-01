import React, { Component, PropTypes } from 'react';

import Item from './Item';
import { Filter } from '../utils/Filter';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Filter(this.props.items, this.props.type)
        }
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                value: PropTypes.string.isRequired,
                checked: PropTypes.bool.isRequired
            })
        ),
        checkItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        editItem: PropTypes.func.isRequired
    }

    render() {
        return (
            <ul className="list-group items_list">
                {this.state.items.length > 0 ? this.state.items.map((item, index) =>
                    <Item value={item.value}
                        key={item.id} id={item.id}
                        checked={item.checked}
                        checkItem={this.props.checkItem}
                        deleteItem={this.props.deleteItem}
                        editItem={this.props.editItem}
                        context={this.props.context} />
                ) : <div className="alert alert-danger searchNoResult">
                        Type the text and press <b>"Enter"</b> to add item.
                        </div>}
            </ul>
        )
    }
}

export default List;