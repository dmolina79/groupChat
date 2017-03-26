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

			<div className="container">
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
			<div id="signIn">
			<h1>Sign in to Group Chat</h1>
			<h3>Enter your email and password</h3>
			</div>
				<fieldset className="form-group">
					<label htmlFor="Email" id="email">Email:</label>
					<input {...email} className="form-control" placeholder="Enter E-mail" />

					<label htmlFor="Password">Password:</label>
					<input {...password} type="password" className="form-control" placeholder="Enter password"  />
					<button action="submit" className="btn btn-warning" id="btn">
					Sign in
					</button>
				</fieldset>
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
