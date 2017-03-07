import React, { Component } from 'react';

export default class ListGroup extends Component {
  renderList() {
    let toRender;
    if (this.props.selectable) {
      toRender = this.props.list.map((item) => {
        return (
          <button type="button" key={item} className="list-group-item">{item}</button>
        );
      });
    } else {
      toRender = this.props.list.map((item) => {
        return (
          <li key={item} className="list-group-item">{item}</li>
        );
      });
    }

    return toRender;
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.group}</div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}
