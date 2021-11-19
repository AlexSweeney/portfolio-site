import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom'; 
import { colors } from './../colors.js';
import Header from './Header.jsx';
import { hexToRGB } from './../utils/testUtils.js';

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
	navLinks = nav && nav.querySelectorAll('a');
	burger = document.querySelector('.burger');
	burgerBars = burger && burger.querySelectorAll('.burger-bar');
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
})

// ==================================== Tests ======================================= //
describe('<Header logoChars={""} navLinks={[""]} setBurgerIsOpen={() => {}}/>', () => {
	describe('render', () => {
		describe('layout', () => {
			describe('desktop', () => {
				it('should render', () => { 
					renderDesktop()
	
					expect(header).toBeTruthy()
				})
			})
	
			describe('phone', () => {
				it('should render', () => {
					renderPhone()
	
					expect(header).toBeTruthy()
				})
			})
		})
		
		describe('color', () => {
			it('should have background of colors.background.dark', () => {
				renderDesktop()
				
				const res = hexToRGB(colors.background.dark);
				expect(header.style.background).toEqual(res)
			})
		})
	})
	
	describe('text logo', () => {
		describe('layout', () => {
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

	describe('nav links', () => { 
		describe('layout', () => {
			describe('desktop', () => {
				it('nav should have style.display = "block"', () => {
					renderDesktop()
	
					expect(nav.style.display).toEqual('block')
				})
	
				it('should render a nav link for each item from props.navLinks', () => {
					renderDesktop()
	
					navLinks.forEach((navLink, i) => {
						expect(navLink.textContent).toEqual(navLinkNames[i])
					})
				})
			})
	
			describe('phone', () => {
				it('nav should have style.display = "none"', () => {
					renderPhone()
	
					expect(nav.style.display).toEqual('none')
				})
			}) 
		})
		
		describe('color', () => {
			it('should have color: colors.font.light', () => {
				renderDesktop()

				const res = hexToRGB(colors.font.light);

				navLinks.forEach(navLink => {
					expect(navLink.style.color).toEqual(res)
				})
			})
		})

		describe('font', () => {
			it('should have fontFamily : fonts.body', () => {
				renderDesktop()

				navLinks.forEach(navLink => {
					expect(navLink.style.fontFamily).toEqual(fonts.body)
				}) 
			})
		})
	})

	describe('burger', () => {
		describe('layout', () => {
			describe('desktop', () => {
				it('.burger should have .style.display = "none" ', () => {
					renderDesktop()
	
					expect(burger.style.display).toEqual('none')
				})
			})
	
			describe('phone', () => {
				describe('render', () => {
					it('.burger should have .style = {display: flex, flexDirection: column, justifyContent: spaceBetween, }', () => {
						renderPhone()
		
						expect(burger.style.display).toEqual('flex')
						expect(burger.style.flexDirection).toEqual('column')
						expect(burger.style.flexDirection).toEqual('column')
					})
		
					it('should have 3 .burger-bar children', () => {
						renderPhone()
					
						expect(burgerBars.length).toEqual(3)
					})
	
					it('.burger-bar should have .style = {height: 25%}', () => {
						renderPhone()
	
						burgerBars.forEach(burgerBar => {
							expect(burgerBar.style.height).toEqual('25%')
						})
					})
				})
				
				describe('touch', () => {
					describe('first touch', () => {
						it('should add ".burger-selected"', () => {
							renderPhone()
		
							fireEvent.touchStart(burger) 
							expect(burger.className).toContain("burger-selected")
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
							expect(burger.className).not.toContain("burger-selected")
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
		 
		describe('color', () => {
			it('.burger-bar should have background: colors.background.light', () => {
				renderDesktop()

				const res = hexToRGB(colors.background.light);

				burgerBars.forEach(burgerBar => {
					expect(burgerBar.style.background).toEqual(res)
				}) 
			})
		})
	})
})
