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
      <div className="jumbotron">
				{/*<img alt="img" src="img/groupchat.jpg"/>*/}
        <div className="text-center">
					<h1>Create your GroupChat</h1>
				</div>
				<form className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" onSubmit={this.submitCreateGroup}>
					<div className="form-group">
						<input
              value={this.state.groupName}
              className="form-control"
              placeholder="Enter a new name"
              onChange={event => this.onInputChange(event.target.value)}
            />
					</div>
					<button type="submit" className="btn btn-outline-success col">Create</button>
				</form>
			</div>
    );
  }
}
export default connect(null, actions)(CreateGroupChat);
