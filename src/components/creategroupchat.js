import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateGroupChat extends Component {
  submitCreateGroup(event) {
    event.preventDefault();
    console.log(event.target);
  }
  render() {
    return (
      <div>
      <form onSubmit={this.submitCreateGroup.bind(this)}>
      <div id="GroupChat">
      <h1>Create your GroupChat</h1>
      </div>
        <fieldset className="form-group">
          <input
            name=''
            id="GroupChat1"
            className="form-control"
            placeholder="Enter a new name"
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
