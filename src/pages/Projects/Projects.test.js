import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Projects from './Projects.jsx';
import { colors } from '../../styles/styles';
import { hexToRGB } from '../../utils/testUtils';

// ==================================== Consts ====================================== //
const thisProjs = [<div className="project" key="project-1">Project-1</div>, <div className="project" key="project-2">Project-2</div>];
let projectView;
let projects;
let isDesktop;

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
  projectView = document.querySelector('.projects');
  projects = document.querySelectorAll('.project')
}

// ==================================== Teardown ==================================== //
afterEach(() => {
  cleanup()
})

// ==================================== Tests ======================================= //
describe('<Projects/>', () => {
  describe('desktop', () => {
    describe('render', () => {
      it('should render', () => {
        renderDesktop()

        expect(projectView).toBeTruthy()
      }) 
    })

    describe('content', () => {
      it('should render all projects in prop.projs', () => {
        renderDesktop()

        expect(projects.length).toEqual(thisProjs.length)

        projects.forEach((project, i) => { 
          expect(project.textContent).toEqual(thisProjs[i].props.children)
        })
      })
    })

    describe('style', () => {
      describe('background', () => {
        it('should have background = colors.background.darker', () => {
          renderDesktop()

          const res = hexToRGB(colors.background.darker);
          expect(projectView.style.background).toEqual(res)
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }`, () => {
          renderDesktop()

          expect(projectView.style.display).toEqual('flex')
          expect(projectView.style.flexDirection).toEqual('column')
          expect(projectView.style.flexGrow).toEqual('1')
        })
      })
    })
  })

  describe('phone', () => {
    describe('render', () => {
      it('should render', () => {
        renderPhone()

        expect(projectView).toBeTruthy()
      }) 
    })

    describe('content', () => {
      it('should render all projects in prop.projs', () => {
        renderPhone()

        expect(projects.length).toEqual(thisProjs.length)

        projects.forEach((project, i) => { 
          expect(project.textContent).toEqual(thisProjs[i].props.children)
        })
      })
    })

    describe('style', () => {
      describe('background', () => {
        it('should have background = colors.background.darker', () => {
          renderPhone()

          const res = hexToRGB(colors.background.darker);
          expect(projectView.style.background).toEqual(res)
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flex-direction: column;
        }`, () => {
          renderPhone()

          expect(projectView.style.display).toEqual('flex')
          expect(projectView.style.flexDirection).toEqual('column')
        })
      })
    })
  })
})