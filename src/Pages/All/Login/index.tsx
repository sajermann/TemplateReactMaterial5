/* eslint-disable no-unused-vars */
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from '../../../Context/AuthContext';

export default function Login() {
	const history = useHistory();
	const { user, login, login2, logout } = useAuth();
	return (
		<>
			<Button variant="contained" color="primary" onClick={login}>
				Fazer Logins
			</Button>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => history.push('/all/home')}
			>
				Ir para Home Sem Logar
			</Button>
			<Button variant="contained" color="secondary" onClick={login2}>
				Ir para Home Sem Autorização
			</Button>
		</>
	);
}
