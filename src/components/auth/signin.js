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
			<div className="jumbotron d-flex flex-column justify-content-center expand">
				<div className="row text-center">
					<h1 className="col">Sign in to Group Chat</h1>
				</div>

				<div className="row justify-content-center">
					<div className="form col-12">
						<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
							<div className="form-group mb-2">
								<input {...email} className="form-control" placeholder="Email" />
							</div>
							<div className="form-group mb-2">
								<input {...password} type="password" className="form-control" placeholder="Password" />
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary col-12">Sign in</button>
							</div>
							{this.renderAlert()}
						</form>
					</div>
				</div>
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
