import React from "react";
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import App from './App.jsx';

// ==================================== Consts & Vars ================================ //
const thisLinks = ['Home', 'Technical Skills', 'Projects', 'Contact'];

let isDesktop;

let app;

let header;
let textLogo;
let links;
let burger;
let burgerMenu;

let home; 
let technicalSkills;
let projects;
let contact;

let topicBar;
let topics;

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
  technicalSkills = document.querySelector('.technical-skills'); 
  projects = document.querySelector('.projects'); 
  contact = document.querySelector('.contact'); 
  burgerMenu = document.querySelector('.burger-menu');

  topicBar = document.querySelector('.topic-bar');
  topics = document.querySelectorAll('.topic');
}

function resetParts() {
  app = null;

  header = null;
  textLogo = null;
  links = null;

  home = null;
  technicalSkills = null;
  projects = null;
  contact = null;

  topicBar = null;
  topics = null;
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

          describe('burger', () => {
            it('should not render', () => {
              renderDesktop()

              expect(burger).toBeFalsy()
            })
          })
        })
      })
    })

    describe('on click', () => {
      describe('nav links', () => {
        describe('on click Home', () => {
          it('should only show Home page', () => {
            renderDesktop()

            userEvent.click(screen.getByText('Projects')) 
            userEvent.click(screen.getByText('Home')) 
            getParts()

            expect(home).toBeTruthy()
            expect(technicalSkills).toBeFalsy()
            expect(projects).toBeFalsy()
            expect(contact).toBeFalsy()
          }) 
        })
  
        describe('on click Technical Skills', () => {
          it('should only show Techincal Skills page', () => {
            renderDesktop()

            userEvent.click(screen.getByText('Technical Skills'))  
            getParts()

            expect(home).toBeFalsy()
            expect(technicalSkills).toBeTruthy()
            expect(projects).toBeFalsy()
            expect(contact).toBeFalsy()
          }) 
        })

        describe('on click Projects', () => {
          it('should only show Projects page', () => {
            renderDesktop()

            userEvent.click(screen.getByText('Projects'))  
            getParts()

            expect(home).toBeFalsy()
            expect(technicalSkills).toBeFalsy()
            expect(projects).toBeTruthy()
            expect(contact).toBeFalsy()
          }) 
        })

        describe('on click Contact', () => {
          it('should only show Contact page', () => {
            renderDesktop()
 
            userEvent.click(screen.getByText('Contact'))  
            getParts()

            expect(home).toBeFalsy()
            expect(technicalSkills).toBeFalsy()
            expect(projects).toBeFalsy()
            expect(contact).toBeTruthy()
          })
        })
      }) 

      describe('Technical Skills', () => {
        describe('subjects', () => {
          describe('React', () => {
            it('should show topics: hooks, functional components, react router, unit tests', () => {
              renderDesktop()

              userEvent.click(screen.getByText('Technical Skills'))

              userEvent.click(screen.getByText('React'))
 
              getParts()

              const target = ['hooks', 'functional components', 'react router', 'unit tests'];

              expect(topics.length).toEqual(target.length)
              topics.forEach((topic, i) => {
                expect(topic.textContent).toEqual(target[i])
              })
            })
          })

          describe('javascript', () => {
            it('should show topics: async / await, session storage, promises, audio', () => {
              renderDesktop()

              userEvent.click(screen.getByText('Technical Skills'))

              userEvent.click(screen.getByText('javascript'))

              getParts() 
              
              const target = ['async / await', 'session storage', 'promises', 'audio'];

              expect(topics.length).toEqual(target.length)
              topics.forEach((topic, i) => {
                expect(topic.textContent).toEqual(target[i])
              })
            }) 
          })
          
          describe('design patterns', () => {
            it('should show topics : test driven development, functional programming', () => {
              renderDesktop()

              userEvent.click(screen.getByText('Technical Skills'))

              userEvent.click(screen.getByText('design patterns'))

              getParts() 
              
              const target = ['test driven development', 'functional programming'];

              expect(topics.length).toEqual(target.length)
              topics.forEach((topic, i) => {
                expect(topic.textContent).toEqual(target[i])
              })
            })
          })
        })
      })
    })
  })

  describe.only('phone', () => {
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

          describe('nav-links', () => {
            it('should not display nav links', () => {
              renderPhone()

              expect(links.length).toEqual(0)
            })
          })

          describe('burger', () => {
            it('should have style.display = "flex"', () => {
              renderPhone()
  
              expect(burger.style.display).toEqual('flex')
            })
          }) 
        })
      })
    })

    describe('on touch', () => {
      describe('touch burger', () => {
        describe('on first touch', () => {
          it('should show burger-menu', () => {
            renderPhone()

            userEvent.click(burger)

            expect(burgerMenu).toBeTruthy()
          })
        })

        describe('on second touch', () => {
          it('should hide burger-menu', () => {
            renderPhone()

            userEvent.click(burger)
            userEvent.click(burger)

            expect(burgerMenu).toBeFalsy()
          })
        })
      })

      describe('on touch burger menu options', () => {

      }) 
    })
  })
})