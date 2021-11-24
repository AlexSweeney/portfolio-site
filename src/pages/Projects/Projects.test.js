import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Projects from './Projects.jsx';
import { colors } from '../../styles/styles';
import { hexToRGB } from '../../utils/testUtils';

// ==================================== Consts ====================================== //
const thisProjs = [<div className="project">Project-1</div>, <div className="project">Project-2</div>];
let projectView;
let projects;

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

// ==================================== Util Fns ==================================== //
function renderDesktop() { 
	isDesktop = true;  

  render(<Projects projs={thisProjs} />) 
	getParts()
}

function renderPhone() { 
	isDesktop = false; 
  
  render(<Projects projs={thisProjs} />) 
	getParts()
}

function getParts() {
  projectView = document.querySelector('.project-view');
  projects = document.querySelectorAll('.project')
}

// ==================================== Teardown ==================================== //
afterEach(() => {
  cleanup()
})

// ==================================== Tests ======================================= //
describe('<Projects projs={[]}/>', () => {
  describe('desktop', () => {
    describe('render', () => {
      it('should render', () => {
        renderDesktop()

        expect(projectView).not.toEqual(null)
      }) 
    })

    describe('content', () => {
      it('should render all projects in prop.projs', () => {
        renderDesktop()

        expect(projects.length).toEqual(thisProjs.length)

        projects.forEach((project, i) => {
          expect(project).toEqual(thisProjs[i])
        })
      })
    })

    describe('style', () => {
      describe('background', () => {
        it('should have background = colors.background.dark', () => {
          renderDesktop()

          const res = hexToRGB(colors.background.dark);
          expect(projectView.background).toEqual(res)
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flex-direction: column;
        }`, () => {
          renderDesktop()

          expect(projectView.display).toEqual('flex')
          expect(projectView.flexDirection).toEqual('column')
        })
      })
    })
  })

  describe('phone', () => {
    describe('render', () => {
      it('should render', () => {
        renderPhone()

        expect(projectView).not.toEqual(null)
      }) 
    })

    describe('content', () => {
      it('should render all projects in prop.projs', () => {
        renderPhone()

        expect(projects.length).toEqual(thisProjs.length)

        projects.forEach((project, i) => {
          expect(project).toEqual(thisProjs[i])
        })
      })
    })

    describe('style', () => {
      describe('background', () => {
        it('should have background = colors.background.dark', () => {
          renderPhone()

          const res = hexToRGB(colors.background.dark);
          expect(projectView.style.background).toEqual(res)
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flex-direction: column;
        }`, () => {
          renderPhone()

          expect(projectView.display).toEqual('flex')
          expect(projectView.flexDirection).toEqual('column')
        })
      })
    })
  })
})