import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FindGroupChat extends Component {
  constructor(props) {
    super(props);
    //bindings
    this.findGroup = this.findGroup.bind(this);
    this.displayError = this.renderAlert.bind(this);

    this.state = { groupName: '' };
  }

  componentWillUnmount() {
    this.props.groupFound();
  }

  onInputChange(groupName) {
    this.setState({ groupName });
  }

  findGroup(event) {
    event.preventDefault();
    this.props.findGroupChat(this.state.groupName);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      console.log(this.props.errorMessage);
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="jumbotron py-6">
				<div className="text-center">
					<h1>Join an existing team</h1>
				</div>
				<form className="GroupChat col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" onSubmit={this.findGroup}>
					<div className="form-group">
						<input
              value={this.state.groupName}
              className="form-control"
              placeholder="Enter your GroupChat"
              onChange={event => this.onInputChange(event.target.value)}
            />
					</div>
					<button type="submit" className="btn btn-outline-success col mt-3">Find</button>
					{this.renderAlert()}
				</form>
        <img alt="img" src="img/groupchat2.jpg" height="300" width="300" />
			</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.group.notFoundError };
};

export default connect(mapStateToProps, actions)(FindGroupChat);
