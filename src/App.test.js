import React from "react";
import { render, cleanup } from '@testing-library/react';
import App from './App.jsx';

// ==================================== Consts & Vars ================================ //
const thisLinks = ['Home', 'Technical Skills', 'Project', 'Contact'];

let isDesktop;

let app;

let header;
let textLogo;
let links;
let burger;

let home; 

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

// ==================================== Utils Fns ==================================== //
function renderDesktop() { 
	isDesktop = true;

  render(<App/>)
	getParts()
}

function renderPhone() { 
	isDesktop = false;

  render(<App/>)
	getParts()
}

function getParts() {
  app = document.querySelector('.app');

  header = document.querySelector('.header');
  textLogo = header && header.querySelector('.text-logo');
  links = header && header.querySelectorAll('.nav-link');
  burger = header && header.querySelector('.burger');

  home = document.querySelector('.home');
}

function resetParts() {
  app = null;

  header = null;
  textLogo = null;
  links = null;

  home = null;
}

afterEach(() => {
  cleanup(<App/>)
  resetParts()
})

describe('<App/>', () => {
  test.todo('resetParts() for all tests') 

  describe('desktop', () => {
    describe('on render', () => {
      describe('render', () => {
        it('should render', () => {
          renderDesktop() 

          expect(app).toBeTruthy()
        })

        it('should render header', () => {
          renderDesktop()

          expect(header).toBeTruthy()
        })

        it('should render Home', () => {
          renderDesktop()

          expect(home).toBeTruthy()
        })
      })

      describe('content', () => {
        describe('<Header/>', () => {
          describe('logo', () => {
            it('should have logo with characters "ASWD"', () => {
              renderDesktop()

              expect(textLogo.textContent).toEqual('ASWD')
            })
          })

          describe('links', () => {
            it(`should display links: ${thisLinks}`, () => {
              renderDesktop()

              expect(links.length).toEqual(thisLinks.length)
              
              links.forEach((link, i) => {
                expect(link.textContent).toEqual(thisLinks[i])
              })
            })
          })

          // describe('burger', () => {
          //   it('should not render', () => {
          //     renderDesktop()

          //     expect(burger).toBeFalsy()
          //   })
          // })
        })
      })
    })

    describe('on click', () => {
  
    })
  })

  describe('phone', () => {
    describe('on render', () => {
      describe('render', () => {
        it('should render', () => {
          renderPhone() 
  
          expect(app).toBeTruthy()
        })
  
        it('should render header', () => {
          renderPhone() 
  
          expect(header).toBeTruthy()
        })
  
        it('should render Home', () => {
          renderPhone() 
          expect(home).toBeTruthy()
        })
      })
       
      describe('content', () => {
        describe('<Header/>', () => {
          describe('logo', () => {
            it('should have logo with characters "ASWD"', () => {
              renderPhone()

              expect(textLogo.textContent).toEqual('ASWD')
            })
          })

          // describe('nav-links', () => {
          //   it('should not display nav links', () => {
          //     renderPhone()

          //     // expect(links.length).toEqual(0)
          //     links.forEach(link => {
          //       console.log(link.style.display)
          //     })
          //   })
          // })

          // describe('burger', () => {
          //   it('should have style.display = "flex"', () => {
          //     renderPhone()
  
          //     expect(burger.style.display).toEqual('flex')
          //   })
          // }) 
        })
      })
    })

    describe('on touch', () => {

    })
  })
})