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
      <div className="jumbotron d-flex flex-column justify-content-center expand">
        <div className="row text-center">
          <h1 className="col">Join an existing GroupChat</h1>
        </div>

        <div className="row justify-content-center">
          <div className="form col-12">
            <form onSubmit={this.findGroup}>
              <div className="form-group mb-2">
                <input
                  value={this.state.groupName}
                  className="form-control"
                  placeholder="Enter your GroupChat name"
                  onChange={event => this.onInputChange(event.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary col-12">Find</button>
              </div>
              {this.renderAlert()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.group.notFoundError };
};

export default connect(mapStateToProps, actions)(FindGroupChat);
