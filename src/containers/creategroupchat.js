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
<<<<<<< HEAD
      <div className="jumbotron py-6">
        <img alt="img" src="img/groupchat.jpg" className="groupchat1" />
				<div className="text-center">
					<h1>Create your GroupChat</h1>
				</div>
				<form className="GroupChat col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" onSubmit={this.submitCreateGroup}>
					<div className="form-group" id="GroupChat">
						<input
              value={this.state.groupName}
              id="GroupChat1"
              className="form-control"
              placeholder="Enter a new name"
              onChange={event => this.onInputChange(event.target.value)}
            />
					</div>
					<button type="submit" className="btn btn-outline-success col mt-3">Create</button>

				</form>
			</div>
=======
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
>>>>>>> 2f1e59779f4e2159480807ab873a103dcf4b8a64
    );
  }
}
export default connect(null, actions)(CreateGroupChat);
