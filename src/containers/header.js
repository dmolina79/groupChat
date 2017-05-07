import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Header extends Component {
	renderLinks() {
		const authenticated = this.props.authenticated;
		let links = [];

		if (authenticated) {
			links = ([
				<Link className="nav-item nav-link" to="/creategroupchat" key="3">Create a GroupChat</Link>,
				<Link className="nav-item nav-link" to="/findgroupchat" key="4">Find a GroupChat</Link>,
				<Link className="nav-item nav-link" to="/signout" key="5">Sign Out</Link>
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


			<nav className="navbar navbar-toggleable sticky-top">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<Link className="navbar-brand" to="/" key="0"><strong>GroupChat</strong></Link>
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
