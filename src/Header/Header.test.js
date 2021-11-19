// import { isElementOfType } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/dom';
// import Header from './Header.jsx';

// ==================================== Consts & vars ==================================== //
// const logoChars = 'ASWD';
// const navLinkNames = ['link-1', 'link-2', 'link-3']; 

// let header;
// let textLogo;
// let nav;
// let navLinks;
// let burger;

// ==================================== Utils Fns ==================================== //
// function renderDesktop() {
// 	const iframe = <iframe style={{width: '426px'}}></iframe>;
// 	// iframe.style.width = '426px'; 

// 	// render(<Header logoChars={logoChars} navLinks={navLinks}/>)
// 	// render(<Header logoChars={logoChars} navLinks={navLinkNames}/>, { wrapper: iframe })
// 	getParts()
// }

// function renderPhone() {
// 	/*const iframe = document.createElement('iframe');
// 	iframe.style.width = '425px'; */
// 	const iframe = <iframe style={{width: '425px'}}></iframe>;

// 	// render(<Header logoChars={logoChars} navLinks={navLinkNames}/>, { wrapper: iframe })
// 	getParts()
// }

// function getParts() {
// 	header = document.querySelector('header');
// 	textLogo = document.querySelector('.text-logo');
// 	nav = document.querySelector('nav');
// 	navLinks = nav.querySelectorAll('a');
// 	burger = document.querySelector('.burger');
// }

// ==================================== Teardown ==================================== //
beforeEach(() => {
	render(<Header/>)
	// getParts()
})

afterEach(() => {
	cleanup() 
})

// ==================================== Tests ======================================= //
describe('<Header logoChars={""} navLinks={[""]}/>', () => {
	describe('render', () => {
		describe.only('desktop', () => {
			it('should render', () => {
				// expect(isElementOfType(header, Header)).toEqual(true)
				expect(header).toBeTruthy()
			})
		})

		/*describe.skip('phone', () => {
			it('should render', () => {
				// renderPhone()

				expect(isElementOfType(header, Header)).toEqual(true)
			})
		})	*/
	})
	
	/*describe.skip('text logo', () => {
		describe('desktop', () => {
			it('should render text logo', () => {
				// renderDesktop()
				expect(textLogo).not.toEqual(null)
			})

			it('text logo should have characters passed in props.logoChars', () => {
				// renderDesktop()
				expect(textLogo.textContent).toEqual(logoChars)
			})
		})

		describe('phone', () => {
			it('should render text logo', () => {
				// renderPhone()
				expect(textLogo).not.toEqual(null)
			})

			it('text logo should have characters passed in props.logoChars', () => {
				// renderPhone()
				expect(textLogo.textContent).toEqual(logoChars)
			})
		}) 
	})

	describe.skip('nav links', () => {
		describe('desktop', () => {
			it('should render a nav link for each item from props.navLinks', () => {
				// renderDesktop()

				navLinkNames.forEach((navLinkName, i) => {
					expect(navLink[i].textContent).toEqual(navLinkName)
				})
			})
		})

		describe('phone', () => {
			it('should not render nav links', () => {
				// renderPhone()

				expect(nav).toEqual(null)
			})
		}) 
	})

	describe.skip('burger', () => {
		describe('desktop', () => {
			it('should not render burger', () => {
				// renderDesktop()

				expect(burger).toEqual(null)
			})
		})

		describe('phone', () => {
			it('should render burger', () => {
				// renderPhone()

				expect(burger).not.toEqual(null)
			})

			it('should add ".burger-selected" when touched once', () => {
				// renderPhone()

				userEvent.touch(burger)
				expect(phone.className).toContain("burger-selected")
			})

			it('should remove ".burger-selected" when touched twice', () => {
				// renderPhone()

				userEvent.touch(burger)
				userEvent.touch(burger)
				expect(phone.className).not.toContain("burger-selected")
			})
		}) 
	})*/
})
