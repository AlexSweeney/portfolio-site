import React, { useEffect, useState } from 'react'; 
import './Header.css';

export default function Header({logoChars = "", navLinks = []}) {
	const [burgerIsSelected, setBurgerIsSelected] = useState(false);
	const [burgerClass, setBurgerClass] = useState('');

	// gets value on first render => for testing in console must refresh page
	const desktopMatch = window.matchMedia('(min-width: 426px)').matches;

	// ================== Styles 
	const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between', 
	}	 

	const navStyle = {
		display: desktopMatch ? 'block' : 'none',
	}

	const burgerStyle = { 
		display: desktopMatch ? 'none' : 'flex',
		flexDirection: 'column', 
		justifyContent: 'space-between',
	};

	const burgerBarStyle = {
		height: '25%',
	}

	// ====================================================== Event Handlers =============================================== //
	function onTouchBurger() {
		setBurgerIsSelected(oldVal => !oldVal)
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
			<div className="text-logo">
				{logoChars}
			</div>

			<nav className="header-nav" style={navStyle}>
				{
					navLinks.map((navLink, i) => {
						return <a href="" key={`nav-link-${i}`}>{navLink}</a>
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