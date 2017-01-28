import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import './App.css';
import New from './New';
import List from './List';
import LeftItems from './LeftItems';
import ListSelector from './ListSelector';
import GlobalAction from './GlobalAction';

//Func for display all items
const filterAll = function () {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <New context={this} value={this.state.search} />
        <List items={this.state.items} type="all" search={this.state.search} />
      </div>

      <div className="panel-footer">
        <LeftItems value={this.state.leftCount} />
        <ListSelector active="all" />
        <GlobalAction />
      </div>
    </div >
  )
}

//Func for display only active items
const filterActive = function () {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <New context={this} value={this.state.search} />
        <List items={this.state.items} type="active" search={this.state.search} />
      </div>

      <div className="panel-footer">
        <LeftItems value={this.state.leftCount} />
        <ListSelector active="active" />
        <GlobalAction />
      </div>
    </div >
  )
}

//Func for display only completed items
const filterCompleted = function () {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <New context={this} value={this.state.search} />
        <List items={this.state.items} type="completed" search={this.state.search} />
      </div>

      <div className="panel-footer">
        <LeftItems value={this.state.leftCount} />
        <ListSelector active="completed" />
        <GlobalAction />
      </div>
    </div >
  )
}

//"Generate" key for Router
let reloadCounter = 0;

class App extends Component {
  //Store emulator
  items = [{
    value: "Test",
    checked: true
  },
  {
    value: "Lorem Ipsum Dolor",
    checked: false
  }];
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      items: this.items,
      leftCount: this.countLeft(this.items)
    }
  }

  countLeft(items) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      if (!items[i].checked) {
        count++;
      }
    }
    return count;
  }

  item(text) {
    return {
      value: text,
      checked: false
    }
  }

  handleAdd(item) {
    var newItem = new this.item(item);
    this.state.items.unshift(newItem);
    this.setState(({ leftCount: this.countLeft(this.state.items) }));
    this.setState({ search: '' });
    reloadCounter++;
  }

  handleSearch(text) {
    this.setState({ search: text });
    reloadCounter++;
  }

  render() {
    return (
      <section>
        <h1>ToDo List</h1>

        <Router history={hashHistory} key={reloadCounter}>
          <Route path="/" component={filterAll.bind(this)} />
          <Route path="/active" component={filterActive.bind(this)} />
          <Route path="/completed" component={filterCompleted.bind(this)} />
        </Router>

      </section>
    )
  }

}

export default App;