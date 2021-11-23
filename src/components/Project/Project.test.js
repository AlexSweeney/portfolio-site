import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Project from './Project.jsx';

const projectText = <><h3 className="project-header">Text Header</h3><p className="project-text">test text</p></>;
const picStyle = {
  left: '36px',
  top: '36px',
};

const textStyle = {
  left: '16px',
  top: '16px',
};

let isDesktop;
let project;
let header;
let text;

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

  render(<Project picStyle={picStyle}>{projectText}</Project>) 
	getParts()
}

function renderPhone() { 
	isDesktop = false; 
  
  render(<Project>{projectText}</Project>) 
	getParts()
}

function getParts() {
  project = document.querySelector('.project');
  header = project && project.querySelector('.project-header');
  text = project && project.querySelector('.project-text');
}

// ==================================== Teardown ==================================== //
afterEach(() => {
  cleanup()
})

describe('<Project picture=[<img/>] picStyle={} textStyle={}>Text</Project>', () => {
  describe('desktop', () => {
    describe('on render', () => {
      test('it should render', () => {
        renderDesktop()

        expect(project).not.toEqual(null)
      })
  
      describe('layout', () => {
        describe('text', () => {
          it(`should have style = {
            position: absolute,
            left: props.textStyle.left,
            top: props.textStyle.top,
          }`, () => {
            renderDesktop()

            expect(text.style.position).toEqual('absolute')
            expect(text.style.left).toEqual(textStyle.left)
            expect(text.style.top).toEqual(textStyle.top)
          })
        })
  
        describe('picture', () => {
          it(`should have style = {
            position: absolute,
            left: props.picStyle.left,
            top: props.picStyle.top,
          }`, () => {
            renderDesktop()

            expect(text.style.position).toEqual('absolute')
            expect(text.style.left).toEqual(picStyle.left)
            expect(text.style.top).toEqual(picStyle.top)
          })
        })
      })
  
      describe('text', () => {
        test('it should display children', () => {
          renderDesktop()

          expect(header).not.toEqual(null)
          expect(text).not.toEqual(null)
        })
        
        describe('.header', () => {
          test('it should have fontFamily = fonts.head', () => {
            renderDesktop()

            expect(header.fontFamily).toEqual(fonts.head)
          })

          test('it should have color = colors.font.light', () => {
            renderDesktop()

            expect(text.color).toEqual(colors.font.light)
          })
        })

        describe('.body', () => {
          test('it should have fontFamily = fonts.body', () => {
            renderDesktop()

            expect(body.fontFamily).toEqual(fonts.body)
          })

          test('it should have color = colors.font.light', () => {
            renderDesktop()

            expect(body.color).toEqual(colors.font.light)
          })
        }) 
      }) 
    })
  }) 

  describe('phone', () => {
    describe('on render', () => {
      test('it should render', () => {
        renderPhone()

        expect(project).not.toEqual(null)
      })
  
      describe('layout', () => {
        describe('text', () => {
          it(`should have style = {
            display: flex,
            justify-content: center,
            align-items: flex-start,
          }`, () => {
            renderPhone()

            expect(text.style.display).toEqual('flex')
            expect(text.style.justifyContent).toEqual('center')
            expect(text.style.alignItems).toEqual('flexStart')
          })
        })
  
        describe('picture', () => {
          it(`should have style = {
            position: absolute,
            left: props.picStyle.left,
            top: props.picStyle.top,
          }`, () => {
            renderPhone()

            expect(text.style.position).toEqual('absolute')
            expect(text.style.left).toEqual(picStyle.left)
            expect(text.style.top).toEqual(picStyle.top)
          })
        })
      })
  
      describe('text', () => {
        test('it should display children', () => {
          renderPhone()

          expect(header).not.toEqual(null)
          expect(text).not.toEqual(null)
        })
        
        describe('.header', () => {
          test('it should have fontFamily = fonts.head', () => {
            renderPhone()

            expect(header.fontFamily).toEqual(fonts.head)
          })

          test('it should have color = colors.font.light', () => {
            renderPhone()

            expect(text.color).toEqual(colors.font.light)
          })
        })

        describe('.body', () => {
          test('it should have fontFamily = fonts.body', () => {
            renderPhone()

            expect(body.fontFamily).toEqual(fonts.body)
          })

          test('it should have color = colors.font.light', () => {
            renderPhone()
            
            expect(body.color).toEqual(colors.font.light)
          })
        }) 
      }) 
    })
  }) 
})