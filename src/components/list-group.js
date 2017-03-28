import React, { Component } from 'react';

export default class ListGroup extends Component {
  constructor(props) {
    super(props);
    this.isItemActive = this.isItemActive.bind(this);
  }

  isItemActive(item) {
    let result;
    if (this.props.selectedItem === item) {
      result = 'nav-link pl-4 py-2 my-0 h5 active';
    } else {
      result = 'nav-link pl-4 py-2 my-0 h5';
    }
    return result;
  }

  renderList() {
    let toRender;
    if (this.props.selectable) {
      toRender = this.props.list.map((item) => {
        return (
          <a href="/" className={this.isItemActive(item)}>{item}</a>
        );
      });
    } else {
      toRender = this.props.list.map((item) => {
        return (
          <span className="nav-link pl-4 py-2 my-0 h5">{item}</span>
        );
      });
    }

    return toRender;
  }

  render() {
    return (
      <div className="nav flex-column text-lowercase">
        <div className="nav-header text-uppercase pl-4 pt-4 h4">{this.props.group}</div>
        {this.renderList()}
      </div>
    );
  }
}
