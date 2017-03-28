import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';


class Signout extends Component {
	componentWillMount() {
		this.props.signoutUser();
	}

	render() {
		return (
			<div className="container" id="signOutContainer">
			<h1>You have signed out of group chat</h1>
			<img alt="img" src="img/sorryface.jpg" className="sorryface" />
			<div className="btn-group" role="group">
			<Link className="btn btn-warning" to="/signin">Sign back in</Link>
 </div>
		</div>
	);
	}
}

export default connect(null, actions)(Signout);
