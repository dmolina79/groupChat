import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


 class Header extends Component {
	renderLinks() {
		const authenticated = this.props.authenticated;
		let links = [];

		if (authenticated) {
			links = ([
				<li className="nav-item" key={3}>
					<Link className="nav-link" to="creategroupchat">Create a GroupChat</Link>
				</li>,
				<li className="nav-item" key={4}>
					<Link className="nav-link" to="findgroupchat">Find a GroupChat</Link>
				</li>,
				<li className="nav-item" key={5}>
					<Link className="btn btn-warning" to="/signout">Sign Out</Link>
				</li>
			]);
		} else {
			//show sign in and sign up links
			links = ([

				<li className="nav-item" key={1}>
					<Link className="btn btn-warning" to="/signin">Sign In</Link>
				</li>,
				<li className="nav-item" key={2}>
					<Link className="btn btn-warning" to="/signup">Sign Up</Link>
				</li>


			]);
		}

		return (links);
	}

	render() {
		return (


			<nav className="navbar navbar-default">
				<Link to="/" className="btn btn-warning">Welcome to Group Chat</Link>

				<ul className="nav navbar-nav" id="nav1">
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
