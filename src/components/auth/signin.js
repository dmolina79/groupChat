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
		console.log(email, password);
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
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label htmlFor="Email">Email:</label>
					<input {...email} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label htmlFor="Password">Password:</label>
					<input {...password} type="password" className="form-control" />
				</fieldset>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">
				Sign in
				</button>
			</form>
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
