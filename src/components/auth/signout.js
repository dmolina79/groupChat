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
			<section className='jumbotron d-flex flex-column justify-content-center expand'>
				<div className='text-center'>
					<h1 className='display-1'><strong>You have signed out</strong></h1>
					<h4 className='lead mt-4'>Come Back Later!</h4>
				</div>
			</section>
	);
	}
}

export default connect(null, actions)(Signout);
