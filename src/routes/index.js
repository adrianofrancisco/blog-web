import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Post from '../pages/post';
import SignIn from '../pages/auth/sign-in';
import SignUp from '../pages/auth/sign-up';
import ForgotPassword from '../pages/auth/forgot-password';
import Route from './route';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={SignIn} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/forgot-password" component={ForgotPassword} />

				<Route path="/post" component={Post} isPrivate />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;