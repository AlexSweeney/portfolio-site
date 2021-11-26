import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { fonts, colors } from './../../styles/styles.js';
import { hexToRGB } from './../../utils/testUtils.js'; 
import Project from './Project.jsx';

// ==================================== Consts & Vars =============================== //
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
let picture;

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

  render(<Project picStyle={picStyle} textStyle={textStyle}>{projectText}</Project>) 
	getParts()
}

function renderPhone() { 
	isDesktop = false; 
  
  render(<Project picStyle={picStyle} textStyle={textStyle}>{projectText}</Project>) 
	getParts()
}

function getParts() {
  project = document.querySelector('.project');
  header = project && project.querySelector('.header-container');
  text = project && project.querySelector('.text-container');
  picture = project && project.querySelector('.picture-container');
}

// ==================================== Teardown ==================================== //
afterEach(() => {
  cleanup()
})

// ==================================== Tests ======================================= //
describe('<Project picture=[<img/>] picStyle={} textStyle={}>Text</Project>', () => {
  describe('desktop', () => {
    describe('on render', () => {
      describe('render', () => {
        test('it should render', () => {
          renderDesktop()
  
          expect(project).not.toEqual(null)
        })
  
        test('it should render children', () => {
          renderDesktop()
  
          expect(header).not.toEqual(null)
          expect(text).not.toEqual(null)
          expect(picture).not.toEqual(null)
        }) 
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
 
            expect(picture.style.position).toEqual('absolute')
            expect(picture.style.left).toEqual(picStyle.left)
            expect(picture.style.top).toEqual(picStyle.top)
          })
        })
      })
  
      describe('text', () => {
        describe('.header', () => {
          test('it should have fontFamily = fonts.head', () => {
            renderDesktop()

            expect(header.style.fontFamily).toEqual(fonts.head)
          })

          test('it should have color = colors.font.light', () => {
            renderDesktop()

            const res = hexToRGB(colors.font.light);
            expect(header.style.color).toEqual(res)
          })
        })

        describe('.text', () => {
          test('it should have fontFamily = fonts.body', () => {
            renderDesktop()

            expect(text.style.fontFamily).toEqual(fonts.body)
          })

          test('it should have color = colors.font.light', () => {
            renderDesktop()

            const res = hexToRGB(colors.font.light);
            expect(text.style.color).toEqual(res)
          })
        }) 
      }) 
    })
  }) 

  describe('phone', () => {
    describe('on render', () => {
      describe('render', () => {
        test('it should render', () => {
          renderPhone()
  
          expect(project).not.toEqual(null)
        })

        test('it should render children', () => {
          renderPhone()
  
          expect(header).not.toEqual(null)
          expect(text).not.toEqual(null)
          expect(picture).not.toEqual(null)
        }) 
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
            expect(text.style.alignItems).toEqual('flex-start')
          })
        })
  
        describe('picture', () => {
          it(`should have style = {
            position: absolute,
            left: props.picStyle.left,
            top: props.picStyle.top,
          }`, () => {
            renderPhone()

            expect(picture.style.position).toEqual('absolute')
            expect(picture.style.left).toEqual(picStyle.left)
            expect(picture.style.top).toEqual(picStyle.top)
          })
        })
      })
  
      describe('text', () => { 
        describe('.header', () => {
          test('it should have fontFamily = fonts.head', () => {
            renderPhone()

            expect(header.style.fontFamily).toEqual(fonts.head)
          })

          test('it should have color = colors.font.light', () => {
            renderPhone()
            
            const res = hexToRGB(colors.font.light);
            expect(header.style.color).toEqual(res)
          })
        })

        describe('.body', () => {
          test('it should have fontFamily = fonts.body', () => {
            renderPhone()

            expect(text.style.fontFamily).toEqual(fonts.body)
          })

          test('it should have color = colors.font.light', () => {
            renderPhone()

            const res = hexToRGB(colors.font.light);
            expect(text.style.color).toEqual(res)
          })
        }) 
      }) 
    })
  }) 
})