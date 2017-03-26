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
      <div>
      <form onSubmit={this.findGroup}>
      <div id="GroupChat">
      <h1>Find your GroupChat</h1>
      </div>
      <fieldset className="form-group">
                <input
                  value={this.state.groupName}
                  id="GroupChat1"
                  className="form-control"
                  placeholder="Enter your GroupChat"
                  onChange={event => this.onInputChange(event.target.value)}
                />
      <button action="submit" className="btn btn-primary" id="btn">
      Find Group
      </button>
      { this.renderAlert() }
      </fieldset>
      </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return { errorMessage: state.group.notFoundError };
};

export default connect(mapStateToProps, actions)(FindGroupChat);
