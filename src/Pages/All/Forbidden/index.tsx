import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';

export default function Forbidden() {
	const history = useHistory();
	const useStyles = makeStyles(() => ({
		root: {
			flexGrow: 1,
			margin: 10,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
		},
		button: {
			margin: 5,
		},
	}));

	const classes = useStyles();

	return (
		<div>
			<div className={classes.root}>
				<h1>Acesso Negado</h1>
				<h2>Você não tem permissão para acessar essa página</h2>
				<div>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						startIcon={<HomeIcon />}
						onClick={() => {
							history.push(`/all/home`);
						}}
					>
						Home
					</Button>
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						startIcon={<ExitToAppIcon />}
					>
						Sair
					</Button>
				</div>
			</div>
		</div>
	);
}
