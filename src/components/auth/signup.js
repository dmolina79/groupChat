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

			<div className="form-group mb-2" key={field} className={this.showFormIsValid(fieldHelper)}>
				<input type={fieldConfig.type} className="form-control" {...fieldHelper} placeholder={`${fieldConfig.label}`} />
				{this.showError(fieldHelper)}
			</div>

		);
	}

	render() {
		const { handleSubmit } = this.props;

		return (

			<div className="jumbotron d-flex flex-column justify-content-center expand">
				<div className="row text-center">
					<h1 className="col">Sign up to Group Chat</h1>
				</div>

				<div className="row justify-content-center">
					<div className="form col-12">
						<form onSubmit={handleSubmit(this.handleFormSubmit)}>
							{_.map(FIELDS, this.renderField)}
							<div className="form-group">
								<button type="submit" className="btn btn-primary col-12">Sign up</button>
							</div>
							{this.renderAlert()}
						</form>
					</div>
				</div>
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
