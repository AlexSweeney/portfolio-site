import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom'; 
import { colors, fonts } from './../../styles/styles.js';
import Header from './Header.jsx'; 
import { hexToRGB } from '../../utils/testUtils.js';

// ==================================== Consts & vars ==================================== //
const logoChars = 'ASWD';
const navLinkNames = ['link-1', 'link-2', 'link-3']; 

let setBurgerIsOpen;
let isDesktop;

let header;
let textLogo;
let nav;
let navLinks;
let burger;
let burgerBars;

// ==================================== Utils Fns ==================================== //
function renderDesktop() { 
	isDesktop = true;
	setBurgerIsOpen = () => {return 'test'};
	

  render(<Header logoChars={logoChars} navLinks={navLinkNames} setBurgerIsOpen={setBurgerIsOpen}/>)
	getParts()
}

function renderPhone() { 
	isDesktop = false;
	setBurgerIsOpen = jest.fn();

  render(<Header logoChars={logoChars} navLinks={navLinkNames} setBurgerIsOpen={setBurgerIsOpen}/>)
	getParts()
}

function getParts() {
	header = document.querySelector('header');
	textLogo = document.querySelector('.text-logo');
	nav = document.querySelector('nav');
	navLinks = nav && nav.querySelectorAll('.nav-link');
	burger = document.querySelector('.burger');
	burgerBars = burger && burger.querySelectorAll('.burger-bar');
}

function resetParts() {
	header = null;
	textLogo = null;
	nav = null;
	navLinks = null;
	burger = null;
	burgerBars = null;
}

// ==================================== Mock ======================================= //
// matches = used by media query
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: isDesktop,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// ==================================== Teardown ==================================== //
afterEach(() => {
	cleanup() 
	resetParts()
})

// ==================================== Tests ======================================= //
describe('<Header/>', () => {
	describe('desktop', () => {
		describe('on render', () => {
			describe('render', () => {
				it('should render', () => { 
					renderDesktop()
	
					expect(header).toBeTruthy()
				})

				it('should render text logo', () => {
					renderDesktop()
	
					expect(textLogo).toBeTruthy()
				})

				it('should render nav links', () => {
					renderDesktop()

					expect(navLinks.length).toEqual(navLinkNames.length)
				})

				it('should not render burger', () => {
					renderDesktop()

					expect(burger).toBeFalsy()
				})
			})

			describe('content', () => {
				describe('text-logo', () => {
					it('text logo should have characters passed in props.logoChars', () => {
						renderDesktop()
						
						expect(textLogo.textContent).toEqual(logoChars)
					})
				})

				describe('nav-links', () => {
					it(`should have links : ${navLinkNames}`, () => {
						renderDesktop()

						navLinks.forEach((navLink, i) => {
							expect(navLink.textContent).toEqual(navLinkNames[i])
						})
					})
				})
			})

			describe('style', () => {
				describe('layout', () => {
					describe('header', () => {
						it(`should have style: { 
							display: flex, 
							justify-content: space-between, 
							align-items: center,
							padding: 32px,
							box-sizing: border-box 
						}`, () => {
							renderDesktop()
			
							expect(header.style.display).toEqual('flex')
							expect(header.style.justifyContent).toEqual('space-between')
							expect(header.style.alignItems).toEqual('center')
							expect(header.style.padding).toEqual('32px')
							expect(header.style.boxSizing).toEqual('border-box')
						})
					})
					
					describe('nav links', () => {
						it(`should have style = {
							display: flex,
							justifyContent: 'flex-end',
							width: '100%',
						}`, () => {
							renderDesktop()

							expect(nav.style.display).toEqual('flex')
							expect(nav.style.justifyContent).toEqual('flex-end')
							expect(nav.style.width).toEqual('100%')
						})
					})

					describe('.nav-link', () => {
						it('should have marginLeft: 32px', () => {
							renderDesktop()
			
							navLinks.forEach(navLink => {
								expect(navLink.style.marginLeft).toEqual('32px')
							})
						})
					})
				})

				describe('style', () => {
					describe('background', () => {
						it('should have background of styles.colors.background.dark', () => {
							renderDesktop()
							
							const res = hexToRGB(colors.background.dark);
							expect(header.style.background).toEqual(res)
						})
					})

					describe('logo', () => {
						describe('color', () => {
							it('should have color: colors.font.light', () => {
								renderDesktop()
				
								const res = hexToRGB(colors.font.light);
								expect(textLogo.style.color).toEqual(res)
							})
						})
				
						describe('font', () => {
							it('should have fontFamily : fonts.logo', () => {
								renderDesktop()
				
								expect(textLogo.style.fontFamily).toEqual(fonts.logo)
							})
						})
					})

					describe('.nav-link', () => {
						describe('color', () => {
							it('should have color: styles.colors.font.light', () => {
								renderDesktop()
				
								const res = hexToRGB(colors.font.light);
				
								navLinks.forEach(navLink => {
									expect(navLink.style.color).toEqual(res)
								})
							})
						}) 

						describe('font', () => {
							it('should have style.fontFamily : fonts.body', () => {
								renderDesktop()
				
								navLinks.forEach(navLink => {
									expect(navLink.style.fontFamily).toEqual(fonts.body)
								}) 
							})
				
							it('should have style.text-decoration: none', () => {
								renderDesktop()
				
								navLinks.forEach(navLink => {
									expect(navLink.style.textDecoration).toEqual('none')
								}) 
							})
						})
					}) 
				}) 
			})
		}) 
	})

	describe('phone', () => {
		describe('on render', () => {
			describe('render', () => {
				it('should render', () => { 
					renderPhone()
	
					expect(header).toBeTruthy()
				})

				it('should render text logo', () => {
					renderPhone()
	
					expect(textLogo).toBeTruthy()
				})

				it('should not render nav links', () => {
					renderPhone()

					expect(navLinks).toBeFalsy()
				})

				it('should render burger', () => {
					renderPhone()

					expect(burger).toBeTruthy()
				})
			})

			describe('content', () => {
				describe('text-logo', () => {
					it('text logo should have characters passed in props.logoChars', () => {
						renderPhone()
						
						expect(textLogo.textContent).toEqual(logoChars)
					})
				})

				describe('burger', () => {
					it('should have 3 .burger-bar children', () => {
						renderPhone()
					
						expect(burgerBars.length).toEqual(3)
					}) 
				})
			})

			describe('style', () => {
				describe('layout', () => {
					describe('burger', () => {
						it(`should have style = {
								display: flex;
								flexDirection: column; 
								justifyContent: spaceBetween; 
							}`, () => {
							renderPhone()
			
							expect(burger.style.display).toEqual('flex')
							expect(burger.style.flexDirection).toEqual('column')
							expect(burger.style.flexDirection).toEqual('column')
						}) 
					}) 

					describe('burger-bar', () => {
						it('should have style = {height: 25%}', () => {
							renderPhone()
			
							burgerBars.forEach(burgerBar => {
								expect(burgerBar.style.height).toEqual('25%')
							})
						})
					})
				})

				describe('color', () => { 
					it('should have background: styles.colors.background.light', () => {
						renderPhone()
		
						const res = hexToRGB(colors.background.light);
		
						burgerBars.forEach(burgerBar => {
							expect(burgerBar.style.background).toEqual(res)
						}) 
					})
				})
			})
		})

		describe('on touch', () => {
			describe('first touch', () => {
				it('should add ".burger-selected"', () => {
					renderPhone()

					fireEvent.touchStart(burger) 
					expect(burger.className).toContain('burger-selected')
				})

				it('should call .props.setBurgerIsOpen with true', () => {
					renderPhone()

					fireEvent.touchStart(burger) 
					expect(setBurgerIsOpen).toHaveBeenCalledTimes(1)
					expect(setBurgerIsOpen).toHaveBeenCalledWith(true)
				})
			})

			describe('second touch', () => {
				it('should remove ".burger-selected"', () => {
					renderPhone()
	
					fireEvent.touchStart(burger)
					fireEvent.touchStart(burger)
					expect(burger.className).not.toContain('burger-selected')
				})
	
				it('should call .props.setBurgerIsOpen with false', () => {
					renderPhone()
	
					fireEvent.touchStart(burger) 
					expect(setBurgerIsOpen).toHaveBeenCalledTimes(1)
					expect(setBurgerIsOpen).toHaveBeenCalledWith(true)
	
					fireEvent.touchStart(burger) 
					expect(setBurgerIsOpen).toHaveBeenCalledTimes(2)
					expect(setBurgerIsOpen).toHaveBeenCalledWith(false)
				})
			}) 
		}) 
	})
}) 