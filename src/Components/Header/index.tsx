/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MenuLeft from './Menus';
import PerfilWidget from './Perfil';

export default function Header() {
	const [isLoading, setIsLoading] = useState(true);
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const themeMaterial = createTheme();
	const useStyles = makeStyles(() => ({
		root: {
			flexGrow: 1,
			display: 'flex',
		},
		menusLaterais: {
			overflow: 'auto',
			scrollSnapType: 'x mandatory',
			'-webkit-overflow-scrolling': 'touch',
			/* width */
			'&::-webkit-scrollbar': {
				width: '5px',
				height: '5px',
			},
			/* Track */
			'&::-webkit-scrollbar-track': {
				boxShadow: 'inset 0 0 5px grey',
				borderRadius: '10px',
			},
			/* Handle */
			'&::-webkit-scrollbar-thumb': {
				background: themeMaterial.palette.grey[700],
				borderRadius: '10px',
			},
			/* Handle on hover */
			'&::-webkit-scrollbar-thumb:hover': {
				background: themeMaterial.palette.grey[700],
			},
			height: '1000%',
		},
		menuButton: {
			marginRight: themeMaterial.spacing(2),
			color: '#fff',
		},
		title: {
			flexGrow: 1,
		},
		divNotifiAndPerfil: {
			display: 'flex',
		},
		iconPerfil: {
			padding: 0,
			marginLeft: 20,
			color: 'white',
		},
		appBar: {
			transition: themeMaterial.transitions.create(['margin', 'width'], {
				easing: themeMaterial.transitions.easing.sharp,
				duration: themeMaterial.transitions.duration.leavingScreen,
			}),
		},
	}));

	const classes = useStyles();

	useEffect(() => {
		async function load() {
			setIsLoading(false);
		}
		load();
	}, []);

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		)
			return;

		if (event.type === 'keydown') return;
		setState({ ...state, [anchor]: open });
	};

	const list = anchor => (
		<div
			className={classes.menusLaterais}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			{anchor === 'left' ? <MenuLeft /> : <PerfilWidget />}
		</div>
	);

	if (isLoading) {
		return (
			<div className="headerGeral" style={{ marginBottom: 10 }}>
				<CssBaseline />
				<AppBar position="static" className={(classes.appBar, classes.root)}>
					<Toolbar style={{ justifyContent: 'space-between' }}>
						<Skeleton
							variant="rectangular"
							animation="wave"
							width={18}
							height={18}
						/>
						<Typography variant="h6" noWrap>
							<div className="nameHeader">
								<Skeleton variant="rectangular" animation="wave" width={150} />
							</div>
						</Typography>
						<div style={{ display: 'flex' }}>
							<Skeleton
								variant="rectangular"
								animation="wave"
								width={18}
								height={18}
								style={{ margin: '0 10px' }}
							/>
							<Skeleton
								variant="rectangular"
								animation="wave"
								width={18}
								height={18}
								style={{ margin: '0 10px' }}
							/>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}

	return (
		<>
			<div className="headerGeral" style={{ marginBottom: 10 }}>
				<CssBaseline />
				<AppBar position="static" className={(classes.appBar, classes.root)}>
					<Toolbar style={{ justifyContent: 'space-between' }}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={toggleDrawer('left', true)}
							edge="start"
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							Título
						</Typography>

						<div className={classes.divNotifiAndPerfil}>
							<IconButton
								onClick={toggleDrawer('right', true)}
								aria-label="perfil"
								className={classes.iconPerfil}
								color="inherit"
							>
								<AccountBoxIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
			</div>
			<Drawer
				anchor="left"
				open={state.left}
				onClose={toggleDrawer('left', false)}
			>
				{list('left')}
			</Drawer>
			<Drawer
				anchor="right"
				open={state.right}
				onClose={toggleDrawer('right', false)}
			>
				{list('right')}
			</Drawer>
		</>
	);
}
