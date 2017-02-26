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
      <div>
      <form onSubmit={this.submitCreateGroup}>
      <div id="GroupChat">
      <h1>Create your GroupChat</h1>
      </div>
        <fieldset className="form-group">
          <input
            value={this.state.groupName}
            id="GroupChat1"
            className="form-control"
            placeholder="Enter a new name"
            onChange={event => this.onInputChange(event.target.value)}
          />
          <button
            action="submit"
            className="btn btn-primary"
            id="btn"
          >
          Create Group
          </button>
        </fieldset>
        </form>
      </div>
    );
  }
}
export default connect(null, actions)(CreateGroupChat);
