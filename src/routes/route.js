import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
	component: Component,
	isPrivate,
	...rest
}) {
	var signed = false;
	var tokenValido = false;

	var token = localStorage.getItem('@blogreactjsadrianofrancisco:token');
	if (token) {
		var expiration = localStorage.getItem('@blogreactjsadrianofrancisco:expirationDate');

		var expirationDate = new Date(0);
		expirationDate.setUTCSeconds(expiration);
		var today = new Date().getTime();

		if (today < expirationDate.getTime()) {
			tokenValido = true;
		}
	}

	var username = localStorage.getItem('@blogreactjsadrianofrancisco:username');

	if (token && tokenValido && username !== "") {
		signed = true;
	};

	if (!signed && isPrivate) {
		return <Redirect to='/sign-in' />;
	};

	return (
		<Route {...rest} component={Component} />
	);
};

RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
	isPrivate: false
};