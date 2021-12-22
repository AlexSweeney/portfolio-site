import React, { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';
import { colors, fonts } from './../../styles/styles.js';
import './Header.css';

export default function Header({
	logoChars = "", 
	navLinks = [], 
	setBurgerIsOpen = () => {},
}) { 
	// ====================================================== Consts ======================================================== //
	const [burgerIsSelected, setBurgerIsSelected] = useState(false);
	const [burgerClass, setBurgerClass] = useState('');
 
	const desktopMatch = window.matchMedia('(min-width: 426px)').matches; 
	const phoneMatch = !desktopMatch;
 
	const pathName = window.location.pathname.slice(1).replace('%20', ' '); 

	let initialSelectedLink;

	if(pathName === '' || pathName === 'portfolio-site/') {
		initialSelectedLink = navLinks[0];
	}

	navLinks.forEach(navLink => { 
		if(pathName === navLink) {
			initialSelectedLink = navLink;
		}
	})

	const [selectedLink, setSelectedLink] = useState(initialSelectedLink); 

	// ====================================================== Styles ======================================================== //
	const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',  
		padding: '45px 32px',
		height: '64px',
		position: 'relative', 
		boxSizing: 'border-box',
		background: colors.background.dark,
		width: '100%', 
	};

	const logoStyle = {
		color: colors.font.light,
		fontFamily: fonts.logo, 
		textDecoration: 'none',
	};

	const navStyle = { 
    width: '100%',
    justifyContent: 'flex-end',
	};

	const navLinkStyle = {
		color: colors.font.light,
		fontFamily: fonts.body, 
		textDecoration: 'none',
		whiteSpace: 'nowrap', 
	};

	const selectedNavLinkStyle = {
		...navLinkStyle,
		color: colors.font.selected,
	};

	const burgerStyle = {  
		flexDirection: 'column', 
		justifyContent: 'space-between',
		width: '75px',
    height: '53px',
	};

	const burgerBarStyle = {
		height: '25%',
		background: colors.background.light,
	};

	// ====================================================== Event Handlers =============================================== //
	function onTouchBurger() { 
		const selected = !burgerIsSelected; 
		setBurgerIsSelected(selected)
		setBurgerIsOpen(selected)
	}

	function updateBurgerClass(selected) {
		const newClass = selected ? 'burger-selected' : '';

		setBurgerClass(newClass)
	}

	function onTouchLogo() {
		const target = document.querySelector('.text-logo'); 
		
    target.click()
	}

	function onClickLogo() {
		setSelectedLink(navLinks[0])
	}

	function onClickLink(link) { 
		setSelectedLink(link)
	}

	// ====================================================== Listen / Trigger ============================================= //
	useEffect(() => {
		updateBurgerClass(burgerIsSelected)
	}, [burgerIsSelected])

	console.log('header link')

	// ====================================================== Output  ====================================================== //
	return (
		<header className="header" style={headerStyle}>
			<Link 
				to="/" 
				className="text-logo" 
				style={logoStyle} 
				onClick={onClickLogo}
				onTouchStart={onTouchLogo}>{logoChars}</Link>

			<nav className="header-nav" style={navStyle}>
				{
					navLinks.map((navLink, i) => {
						const thisStyle = (navLink === selectedLink) ? selectedNavLinkStyle : navLinkStyle; 

						return <Link 
							to={navLink} 
							className="nav-link" 
							key={`nav-link-${i}`} 
							style={thisStyle}
							onClick={() => onClickLink(navLink)}>{navLink}</Link>
					})
				}
			</nav>
		
			<div className={`burger ${burgerClass}`} style={burgerStyle} onTouchStart={onTouchBurger}>
				<div className="burger-bar" style={burgerBarStyle}></div>
				<div className="burger-bar" style={burgerBarStyle}></div>
				<div className="burger-bar" style={burgerBarStyle}></div>
			</div>  
		</header>
	)
}