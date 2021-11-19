import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event'
import { colors } from './../colors.js';
import Header from './Header.jsx';

// ==================================== Consts & vars ==================================== //
const logoChars = 'ASWD';
const navLinkNames = ['link-1', 'link-2', 'link-3']; 
 
let isDesktop; 
let setBurgerIsOpen;

let header;
let textLogo;
let nav;
let navLinks;
let burger;
let burgerBars;

// ==================================== Utils Fns ==================================== //
function renderDesktop() { 
	isDesktop = true;
  render(<Header logoChars={logoChars} navLinks={navLinkNames}/>)
	getParts()
}

function renderPhone() { 
	isDesktop = false;
  render(<Header logoChars={logoChars} navLinks={navLinkNames}/>)
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
beforeEach(() => {
	setBurgerIsOpen = jest.fn();
})

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
		
		describe.only('color', () => {
			it('should have background of colors.background.dark', () => {
				renderDesktop()
				
				expect(header.style.background).toEqual(colors.background.dark)
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
				expect(textLogo.style.color).toEqual(colors.font.light)
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
				navLinks.forEach(navLink => {
					expect(navLink.style.color).toEqual(colors.font.light)
				})
			})
		})
	})

	describe('burger', () => {
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
					it('should remove ".burger-selected" when touched twice', () => {
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

		describe('color', () => {
			it('should have background: background.font.light', () => {
				expect(burger.style.background).toEqual(colors.background.light)
			})
		})
	})
})
