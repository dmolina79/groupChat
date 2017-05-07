import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateGroupChat extends Component {
  constructor(props) {
    super(props);
    //bindings
    this.submitCreateGroup = this.submitCreateGroup.bind(this);
    //this.onInputChange = this.onInputChange(this);

    this.state = { groupName: '' };
  }

  onInputChange(groupName) {
    this.setState({ groupName });
  }

  submitCreateGroup(event) {
    event.preventDefault();
    this.props.createGroup(this.state.groupName);
  }
  render() {
    return (
      <div className="jumbotron d-flex flex-column justify-content-center expand">
        <div className="row text-center">
          <h1 className="col">Create your GroupChat</h1>
        </div>
        <div className="row justify-content-center">
          <div className="form col-12">
            <form onSubmit={this.submitCreateGroup}>
              <div className="form-group mb-2">
                <input
                  value={this.state.groupName}
                  className="form-control"
                  placeholder="Enter a new GroupChat name"
                  onChange={event => this.onInputChange(event.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary col-12">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, actions)(CreateGroupChat);
