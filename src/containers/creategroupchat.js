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
      <div className="container">
      <img alt="img" src="img/groupchat.jpg" className="groupchat1" />
      <form className="GroupChat" onSubmit={this.submitCreateGroup}>

      <h1>Create a new group chat</h1>


          <input
            value={this.state.groupName}
            className="form-control"
            placeholder="Enter a new name"
            onChange={event => this.onInputChange(event.target.value)}
          />
          <button
            action="submit"
            className="btn btn-warning"
            id="buttonCreateGroup"
          >
          Create Group
          </button>

        </form>
      </div>
    );
  }
}
export default connect(null, actions)(CreateGroupChat);
