import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const FIELDS = {
	username: {
		type: 'text',
		label: 'Username'
	},
	email: {
		type: 'text',
		label: 'Email'
	},
	password: {
		type: 'password',
		label: 'Password'
	},
	passwordConfirm: {
		type: 'password',
		label: 'Confirm Password'
	}
};

class Signup extends Component {
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.renderField = this.renderField.bind(this);
	}

	handleFormSubmit(formProps) {
		console.log('handle form submit');
		//call action creator to sign up user
		this.props.signupUser(formProps);
	}

	showError(fieldName) {
		return (
			<div className="text-help">
				{fieldName.touched ? fieldName.error : ''}
			</div>
		);
	}

	showFormIsValid(fieldName) {
		return `form-group ${fieldName.touched && fieldName.invalid ? 'has-danger' : ''}`;
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops! </strong>
					{this.props.errorMessage}
				</div>
			);
		}
	}

	renderField(fieldConfig, field) {
		const fieldHelper = this.props.fields[field];

		return (

			<div className="form-group" key={field} className={this.showFormIsValid(fieldHelper)}>
				<label htmlFor={fieldConfig.label}>{fieldConfig.label}</label>
				<input type={fieldConfig.type} className="form-control" {...fieldHelper} placeholder={`${fieldConfig.label}`} />
				{this.showError(fieldHelper)}
			</div>

		);
	}

	render() {
		const { handleSubmit } = this.props;

		return (

			<div className="jumbotron">
				<div className="text-center">
					<h1>Sign up to Group Chat</h1>
					<h3>Create your account for free!</h3>
				</div>
				<form className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" onSubmit={handleSubmit(this.handleFormSubmit)}>
					{ _.map(FIELDS, this.renderField)}
					<button type="submit" className="btn btn-outline-success col">Sign Up!</button>
					{this.renderAlert()}
				</form>

			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(FIELDS, (type, field) => {
		if (!values[field]) {
			errors[field] = `Enter a ${field}`;
		}
	});

	if (values.password !== values.passwordConfirm) {
		errors.password = 'Passwords must match';
	}

	return errors;
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signup',
	fields: _.keys(FIELDS),
	validate
}, mapStateToProps, actions)(Signup);
