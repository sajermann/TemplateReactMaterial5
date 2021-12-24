/* eslint-disable no-unused-vars */
import { useHistory } from 'react-router-dom';
import { createContext, useContext, ReactNode, useState, useMemo } from 'react';

type authContextType = {
	user: boolean;
	authentication: boolean;
	authorization: boolean;
	login: () => void;
	login2: () => void;
	logout: () => void;
	setDarkMode: (data: boolean) => void;
	darkMode: boolean;
};

const authContextDefaultValues: authContextType = {
	user: false,
	authentication: false,
	authorization: false,
	login: () => {},
	login2: () => {},
	logout: () => {},
	setDarkMode: () => {},
	darkMode: true,
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
	return useContext(AuthContext);
}

type Props = {
	children: ReactNode;
	darkMode: boolean;
	setDarkMode: (data: boolean) => void;
};
export function AuthProvider({ children, darkMode, setDarkMode }: Props) {
	const history = useHistory();
	const [user, setUser] = useState<boolean>(false);
	const [authentication, setAuthentication] = useState<boolean>(false);
	const [authorization, setAuthorization] = useState<boolean>(false);

	const login = () => {
		console.log('Realizou Login');
		setUser(true);
		setAuthorization(true);
		history.push('/all/home');
	};

	const login2 = () => {
		console.log('Realizou Login Sem Autorização');
		setUser(true);
		setAuthorization(false);
		history.push('/all/home');
	};

	const logout = () => {
		console.log('Realizou Logout');
		setUser(true);
	};

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		user,
		authentication,
		authorization,
		login,
		login2,
		logout,
		setDarkMode,
		darkMode,
	};
	// Correto é usar o useMemo nesse context, TODO: adaptar
	// const foo = useMemo(() => ({ value }), []);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
