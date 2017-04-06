import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

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
          <Link key={item}
            to={`${this.props.prefixRoute}/${item}`}
            className={this.isItemActive(item)}>
            {item}
          </Link>
        );
      });
    } else {
      toRender = this.props.list.map((item) => {
        return (
          <span key={item} className="nav-link pl-4 py-2 my-0 h5">{item}</span>
        );
      });
    }

    return toRender;
  }

  renderModal() {
    return (
      <div className="modal fade" id={`add${this.props.group}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add {this.props.itemName}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient-name" className="form-control-label">{this.props.itemName}:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="nav flex-column text-lowercase">
        <div className="nav-header text-uppercase pl-4 pt-4 h4">
          <span className="d-flex align-items-center">
            {this.props.group}
            <button type="button"
              className="icon-button material-icons ml-auto"
              data-toggle="modal"
              data-target={`#add${this.props.group}`}>
              add_circle_outline
            </button>
            {this.renderModal()}
          </span>
        </div>
        {this.renderList()}
      </div>
    );
  }
}
