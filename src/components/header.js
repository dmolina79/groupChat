import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class Header extends Component {
	renderLinks() {
		const authenticated = this.props.authenticated;
		if (authenticated) {
			return (


			<li className="nav-item" >
				<Link className="nav-link" to="/signout">Sign Out</Link>
			</li>


		);
		} else {
			//show sign in and sign up links
			return [
			<li className="nav-item" key={1}>
				<Link className="nav-link" to="/signin">Sign In</Link>
			</li>,
			<li className="nav-item" key={2}>
				<Link className="nav-link" to="/signup">Sign Up</Link>
			</li>
			];
		}
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<Link to="/" className="navbar-brand">Welcome to Group Chat</Link>

				<ul className="nav navbar-nav" id="nav1">
				<li className="nav-item" key={3}>
					<Link className="nav-link" to="creategroupchat">Create a GroupChat</Link>
				</li>
				<li className="nav-item" key={4}>
					<Link className="nav-link" to="findgroupchat">Find a GroupChat</Link>
				</li>

					{this.renderLinks()}
				</ul>

			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
