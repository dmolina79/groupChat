import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, Breadcrumb } from 'react-bootstrap';

export class Header extends Component {
	renderLinks() {
		const authenticated = this.props.authenticated;
		let links = [];

		if (authenticated) {
			links = ([
				<Nav>

				<NavItem eventKey={3}><Link className="nav-link" to="creategroupchat">
				Create a GroupChat</Link></NavItem>
				<NavItem eventKey={4}><Link className="nav-link" to="findgroupchat">
				Find a GroupChat</Link></NavItem>
				<NavItem eventKey={5}><Link className="nav-link" to="/signout">
				Sign Out</Link></NavItem>

				</Nav>
//
			]);
		} else {
			//show sign in and sign up links
			links = ([

				<Breadcrumb>
				<Breadcrumb.Item><Link className="nav-link" to="/signin">Sign In</Link>
				</Breadcrumb.Item>

				<Breadcrumb.Item>
				<Link className="nav-link" to="/signup">Sign Up</Link>
				</Breadcrumb.Item>
				</Breadcrumb>


			]);
		}

		return (links);
	}

	render() {
		return (

			<Navbar>
			<Navbar.Header>
			<Navbar.Brand>
			<Link to="/">Welcome to Group Chat</Link>

      </Navbar.Brand>
    </Navbar.Header>

<Nav pullRight>
		{this.renderLinks()}
</Nav>
		</Navbar>

		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
