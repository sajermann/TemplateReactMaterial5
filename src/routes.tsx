/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import Home from './Pages/All/Home';
import Login from './Pages/All/Login';
import Forbidden from './Pages/All/Forbidden';
import { useAuth } from './Context/AuthContext';

export type ProtectedRouteProps = {
	authenticationPath: string;
	name: string;
	// children: React.FC;
} & RouteProps;

function ProtectedRoute({ name, ...routeProps }: ProtectedRouteProps) {
	const { user, authentication, authorization } = useAuth();
	useEffect(() => {
		console.log('Passando Pelas Rotas Protegidas');
	}, []);

	if (!user) return <Redirect to={{ pathname: '/all/login' }} />;

	if (!authorization) return <Redirect to={{ pathname: '/all/forbidden' }} />;
	console.log({ user });
	console.log({ routeProps });
	console.log('Caiu Aqui');
	return <Route {...routeProps} />;
}
export default function Routes() {
	const { user, login, logout } = useAuth();
	return (
		<Switch>
			<Route path="/all/login" component={Login} exact />
			<Route path="/all/forbidden" component={Forbidden} exact />
			<ProtectedRoute name="home" path="/all/home" component={Home} exact />
			<Redirect from="/" to="/all/home" exact />
		</Switch>
	);
}
