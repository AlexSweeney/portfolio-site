import React, { useEffect, useState } from 'react';  
import { colors } from '../colors';
import './Header.css';

export default function Header({
	logoChars = "", 
	navLinks = [], 
	setBurgerIsOpen = () => {},
}) {
	// console.log('setBurgerIsOpen', setBurgerIsOpen())
	// ====================================================== Consts ======================================================== //
	const [burgerIsSelected, setBurgerIsSelected] = useState(false);
	const [burgerClass, setBurgerClass] = useState('');

	// gets value on first render => for testing in console must refresh page
	const desktopMatch = window.matchMedia('(min-width: 426px)').matches;

	// ====================================================== Styles ======================================================== //
	const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		background: colors.background.dark,
	}	 

	const logoStyle = {
		color: colors.font.light,
	};

	const navStyle = {
		display: desktopMatch ? 'block' : 'none',
	};

	const navLinkStyle = {
		color: colors.font.light,
	};

	const burgerStyle = { 
		display: desktopMatch ? 'none' : 'flex',
		flexDirection: 'column', 
		justifyContent: 'space-between',
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

	// ====================================================== Listen / Trigger ============================================= //
	useEffect(() => {
		updateBurgerClass(burgerIsSelected)
	}, [burgerIsSelected])

	// ====================================================== Output  ====================================================== //
	return (
		<header className="header" style={headerStyle}>
			<div className="text-logo" style={logoStyle}>
				{logoChars}
			</div>

			<nav className="header-nav" style={navStyle}>
				{
					navLinks.map((navLink, i) => {
						return <a href="" key={`nav-link-${i}`} style={navLinkStyle}>{navLink}</a>
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