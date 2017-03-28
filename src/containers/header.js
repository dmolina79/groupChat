import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Header extends Component {
	renderLinks() {
		const authenticated = this.props.authenticated;
		let links = [];

		if (authenticated) {
			links = ([
<<<<<<< HEAD
				<Link className="nav-item nav-link" to="/creategroupchat" key="3">Create a GroupChat</Link>,
				<Link className="nav-item nav-link" to="/findgroupchat" key="4">Find a GroupChat</Link>,
				<Link className="nav-item nav-link" to="/signout" key="5">Sign Out</Link>
=======
				<li className="nav-item" key={3}>
					<Link className="nav-link" to="creategroupchat">Create a GroupChat</Link>
				</li>,
				<li className="nav-item" key={4}>
					<Link className="nav-link" to="findgroupchat">Find a GroupChat</Link>
				</li>,
				<li className="nav-item" key={5}>
					<Link className="btn btn-warning" to="/signout">Sign Out</Link>
				</li>
>>>>>>> 2f1e59779f4e2159480807ab873a103dcf4b8a64
			]);
		} else {
			//show sign in and sign up links
			links = ([
				<Link className="nav-item nav-link" to="/signin" key="1">Sign In</Link>,
				<Link className="nav-item nav-link" to="/signup" key="2">Sign Up</Link>
			]);
		}

		return (links);
	}

	render() {
		return (


			<nav className="navbar navbar-toggleable navbar-inverse bg-inverse sticky-top">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<a className="navbar-brand" href="/">GroupChat</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="navbar-nav ml-auto text-center">
						{this.renderLinks()}
					</div>
				</div>

			</nav >

		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated };
}


export default connect(mapStateToProps)(Header);
