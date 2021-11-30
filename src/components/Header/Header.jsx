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

	// gets value on first render => for testing in console must refresh page
	const desktopMatch = window.matchMedia('(min-width: 426px)').matches; 
	const phoneMatch = !desktopMatch;

	// ====================================================== Styles ======================================================== //
	const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center', 
		padding: '32px',
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

	const burgerStyle = {  
		flexDirection: 'column', 
		justifyContent: 'space-between',
		width: '100px',
		height: '75px',
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

	// ====================================================== Listen / Trigger ============================================= //
	useEffect(() => {
		updateBurgerClass(burgerIsSelected)
	}, [burgerIsSelected])

	// ====================================================== Output  ====================================================== //
	return (
		<header className="header" style={headerStyle}>
			<Link to="/" className="text-logo" style={logoStyle} onTouchStart={onTouchLogo}>
				{logoChars}
			</Link>

			<nav className="header-nav" style={navStyle}>
				{
					navLinks.map((navLink, i) => {
						return <Link to={navLink} className="nav-link" key={`nav-link-${i}`} style={navLinkStyle}>{navLink}</Link>
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