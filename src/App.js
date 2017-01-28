import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import './App.css';
import New from './New';
import List from './List';
import LeftItems from './LeftItems';
import ListSelector from './ListSelector';
import GlobalAction from './GlobalAction';

const items = [
  {
    value: "Test",
    checked: true
  },
  {
    value: "Lorem Ipsum Dolor",
    checked: false
  }
];

const filterAll = function () {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <New />
        <List items={items} type="all" />
      </div>

      <div className="panel-footer">
        <LeftItems value={this.state.leftCount} />
        <ListSelector active="all" />
        <GlobalAction />
      </div>
    </div >
  )
}

const filterActive = function () {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <New />
        <List items={items} type="active" />
      </div>

      <div className="panel-footer">
        <LeftItems value={this.state.leftCount} />
        <ListSelector active="active" />
        <GlobalAction />
      </div>
    </div >
  )
}

const filterCompleted = function () {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <New />
        <List items={items} type="completed" />
      </div>

      <div className="panel-footer">
        <LeftItems value={this.state.leftCount} />
        <ListSelector active="completed" />
        <GlobalAction />
      </div>
    </div >
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftCount: this.countLeft(items)
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

  render() {
    return (
      <section>
        <h1>ToDo List</h1>

        <Router history={hashHistory}>
          <Route path="/" component={filterAll.bind(this)} />
          <Route path="/active" component={filterActive.bind(this)} />
          <Route path="/completed" component={filterCompleted.bind(this)} />
        </Router>

      </section>
    )
  }
}

export default App;