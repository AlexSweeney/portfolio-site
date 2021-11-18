import React from 'react';
import { isElementOfType } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header.jsx';

// ==================================== Consts & vars ==================================== //
const logoChars = 'ASWD';
const navLinkNames = ['link-1', 'link-2', 'link-3']; 

let header;
let textLogo;
let nav;
let navLinks;
let burger;

// ==================================== Utils Fns ==================================== //
function renderDesktop() {
	const iframe = document.createElement('iframe');
	iframe.style.width = '426px'; 

	render(<Header logoChars={logoChars} navLinks={navLinkNames}/>, { wrapper: iframe })
	getParts()
}

function renderPhone() {
	const iframe = document.createElement('iframe');
	iframe.style.width = '425px'; 

	render(<Header logoChars={logoChars} navLinks={navLinkNames}/>, { wrapper: iframe })
	getParts()
}

function getParts() {
	header = document.querySelector('header');
	textLogo = document.querySelector('.text-logo');
	nav = document.querySelector('nav');
	navLinks = nav.querySelectorAll('a');
	burger = document.querySelector('.burger');
}

// ==================================== Teardown ==================================== //
afterEach(() => {
	cleanup()
	console.log('header after Teardown', header)
})

// ==================================== Tests ======================================= //
describe('<Header logoChars={""} navLinks={[""]}/>', () => {
	describe('render', () => {
		describe('desktop', () => {
			it('should render', () => {
				renderDesktop()

				expect(isElementOfType(header, Header)).toEqual(true)
			})
		})

		describe('phone', () => {
			it('should render', () => {
				renderPhone()

				expect(isElementOfType(header, Header)).toEqual(true)
			})
		})	
	})
	
	describe('text logo', () => {
		describe('desktop', () => {
			it('should render text logo', () => {
				renderDesktop()
				expect(textLogo).not.toEqual(null)
			})

			it('text logo should have characters passed in props.logoChars', () => {
				renderDesktop()
				expect(textLogo.textContent).toEqual(logoChars)
			})
		})

		describe('phone', () => {
			it('should render text logo', () => {
				renderPhone()
				expect(textLogo).not.toEqual(null)
			})

			it('text logo should have characters passed in props.logoChars', () => {
				renderPhone()
				expect(textLogo.textContent).toEqual(logoChars)
			})
		}) 
	})

	describe('nav links', () => {
		describe('desktop', () => {
			it('should render a nav link for each item from props.navLinks', () => {
				renderDesktop()

				navLinkNames.forEach((navLinkName, i) => {
					expect(navLink[i].textContent).toEqual(navLinkName)
				})
			})
		})

		describe('phone', () => {
			it('should not render nav links', () => {
				renderPhone()

				expect(nav).toEqual(null)
			})
		}) 
	})

	describe('burger', () => {
		describe('desktop', () => {
			it('should not render burger', () => {
				renderDesktop()

				expect(burger).toEqual(null)
			})
		})

		describe('phone', () => {
			it('should render burger', () => {
				renderPhone()

				expect(burger).not.toEqual(null)
			})

			it('should add ".burger-selected" when touched once', () => {
				renderPhone()

				fireEvent.touch(burger)
				expect(phone.className).toContain("burger-selected")
			})

			it('should remove ".burger-selected" when touched twice', () => {
				renderPhone()

				fireEvent.touch(burger)
				fireEvent.touch(burger)
				expect(phone.className).not.toContain("burger-selected")
			})
		}) 
	})
})
