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
      <div className="container">
        <form className="GroupChat" onSubmit={this.findGroup}>
         <h1>Join an existing team</h1>
         <input
         value={this.state.groupName}
         className="form-control"
         placeholder="Enter your GroupChat"
         onChange={event => this.onInputChange(event.target.value)}
         />
         <button action="submit" className="btn btn-warning" id="buttonCreateGroup">
         Find Group
         </button>
         { this.renderAlert() }
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
