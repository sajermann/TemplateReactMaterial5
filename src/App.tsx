/* eslint-disable no-unused-vars */
import { useMemo, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './Components/Header';
import { AuthProvider } from './Context/AuthContext';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App() {
	const [darkMode, setDarkMode] = useState(true);
	// const router = useParams();
	const [isLoginPage, setIsLoginPage] = useState(true);
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? 'dark' : 'light',
				},
			}),
		[darkMode]
	);
	return (
		<AuthProvider darkMode={darkMode} setDarkMode={setDarkMode}>
			<ThemeProvider theme={theme}>
				<Routes />
				<CssBaseline />
				{/* {!isLoginPage && <Header />} */}
				{/* <Header /> */}
				<ToastContainer />
			</ThemeProvider>
		</AuthProvider>
	);
}
