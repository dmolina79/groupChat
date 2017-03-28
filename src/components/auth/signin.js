import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';


const FIELDS = {
	email: {
		type: 'input',
		label: 'Email'
	},
	password: {
		type: 'input',
		label: 'Password'

	},
	passwordConfirm: {
		type: 'input',
		label: 'Confirm Password'
	}
};

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		this.props.signinUser({ email, password });
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { email, password } } = this.props;

		return (
			<div className="jumbotron py-6" id="signContainer">
				<div className="sign text-center">
					<h1>Sign in to Group Chat</h1>
					<h3>Enter your email and password</h3>
				</div>
				<form className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<div className="form-group">
						<label htmlFor="Email" id="email">Email:</label>
						<input {...email} className="form-control" placeholder="Enter E-mail" />
					</div>
					<div className="form-group">
						<label htmlFor="Password">Password:</label>
						<input {...password} type="password" className="form-control" placeholder="Enter password" />	
					</div>
					<button type="submit" className="btn btn-outline-success col mt-3">Sign in</button>
					{this.renderAlert()}

				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
