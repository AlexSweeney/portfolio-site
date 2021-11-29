import React, { useEffect, useState } from "react";
import { render, cleanup } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import OptionsBar from './OptionsBar.jsx';
import { colors, fonts } from '../../styles/styles.js';
import { hexToRGB } from '../../utils/testUtils.js';

// ==================================== Consts & vars ==================================== //
const thisOptions = ['subject-1', 'subject-2', 'subject-3'];
const thisClassName = 'test';
const thisStyle = {
  color: 'red',
  background: 'green',
};

let isDesktop;

let optionsBar;
let options;

let selectedOption;
let setSelectedOption;

let handleClick;

// ==================================== Utils Fns ==================================== //
function OptionsBarWithWrapper() {
  [selectedOption, setSelectedOption] = useState(thisOptions[0]);

  return (
    <OptionsBar 
      options={thisOptions} 
      selectedOption={thisOptions[0]}
      handleClick={handleClick} 
      className={thisClassName}
      style={thisStyle}
    />
  )
} 

function renderDesktop() { 
	isDesktop = true;  
  handleClick = jest.fn()

  render(<OptionsBarWithWrapper/>) 
	getParts()
}

function renderPhone() { 
	isDesktop = false; 
  handleClick = jest.fn()

  render(<OptionsBarWithWrapper/>) 
	getParts()
}

function getParts() {
  optionsBar = document.querySelector(`.${thisClassName}-bar`);
  options = document.querySelectorAll(`.${thisClassName}`);
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
describe('<OptionsBar/>', () => { 
  describe('desktop', () => {
    describe('on render', () => {
      describe('render', () => {
        it('should render with className = `${props.className}-bar`', () => {
          renderDesktop()
          
          const thisOptionsBar = document.querySelector(`.${thisClassName}-bar`);
          
          expect(thisOptionsBar).toBeTruthy()
        })
      })
      
      describe('content', () => {
        describe('.options', () => {
          it('should show text for each option in props.option, with className = `${props.className}`', () => {
            renderDesktop()

            const thisOptionElements = document.querySelectorAll(`.${thisClassName}`);

            expect(thisOptionElements.length).toEqual(thisOptions.length)

            thisOptionElements.forEach((option, i) => {
              expect(option.textContent).toEqual(thisOptions[i])
            })
          })
        }) 
      })

      describe('style', () => {
        describe('options bar', () => {
          describe('props.styles', () => {
            it('should add styles from props.styles', () => {
              renderDesktop()
  
              Object.keys(thisStyle).forEach(key => {
                expect(optionsBar.style[key]).toEqual(thisStyle[key])
              })
            })
          })

          describe('layout', () => {
            it(`should have style = {
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
            }`, () => {
              renderDesktop()

              expect(optionsBar.style.display).toEqual('flex')
              expect(optionsBar.style.flexDirection).toEqual('column')
              expect(optionsBar.style.height).toEqual('100vh')
            }) 
          })
        }) 

        describe('option', () => {
          it(`should have style = {
            fontFamily = fonts.head,
            color: colors.font.light,
            textDecoration: 'none',
          }`, () => {
            renderDesktop()
            const res = hexToRGB(colors.font.light);

            options.forEach(option => {
              expect(option.style.fontFamily).toEqual(fonts.head)
              expect(option.style.color).toEqual(res)
              expect(option.style.textDecoration).toEqual('none')
            }) 
          }) 

          describe('layout', () => { 
            it('should have padding: 32px', () => {
              renderDesktop()
  
              options.forEach(option => {
                expect(option.style.padding).toEqual('32px')
              }) 
            })
          })
        }) 
      })
    })
    
    describe('on click', () => {
      it('should class props.handleClick with option text', () => {
        renderDesktop()

        userEvent.click(options[1])

        expect(handleClick).toHaveBeenCalledWith(options[1].textContent)
      })
    })
  })

  describe('phone', () => {
    describe('on render', () => {
      it('should render with className = `${props.className}-bar`', () => {
        renderPhone()
        
        const thisOptionsBar = document.querySelector(`.${thisClassName}-bar`);
        
        expect(thisOptionsBar).toBeTruthy()
      })
    })

    describe('style', () => {
      describe('optionsBar', () => {
        it(`should have style = {
          display: 'flex',
          flexDirection: 'column',
          height: '',
        }`, () => {
          renderPhone()

          expect(optionsBar.style.display).toEqual('flex')
          expect(optionsBar.style.flexDirection).toEqual('column')
          expect(optionsBar.style.height).toEqual('')
        })
  
        it('should add styles from props.styles', () => {
          renderPhone()
  
          Object.keys(thisStyle).forEach(key => {
            expect(optionsBar.style[key]).toEqual(thisStyle[key])
          })
        })
      }) 

      describe('option', () => {
        describe('layout', () => {
          it('should have padding = 32px', () => {
            renderPhone()

            options.forEach(option => {
              expect(option.style.padding).toEqual('32px')
            })
          })
        })

        describe('font', () => {
          it(`should have style = {
            fontFamily: fonts.head, 
            color: colors.font.light,
            textDecoration: 'none',
          }`, () => {
            renderPhone()

            const res = hexToRGB(colors.font.light);

            options.forEach(option => {
              expect(option.style.fontFamily).toEqual(fonts.head)
              expect(option.style.color).toEqual(res)
              expect(option.style.textDecoration).toEqual('none')
            })
          })
        }) 
      })
    })

    describe('content', () => {
      it('should only display selected option', () => { 
        renderPhone()
 
        thisOptions.forEach(option => { 
          if(option === selectedOption) {
            expect(screen.queryByText(`${option}`)).not.toEqual(null)
          } else {
            expect(screen.queryByText(`${option}`)).toEqual(null)
          } 
        })
      })

      it('selected option should have className = `${props.className}`', () => {
        renderPhone()

        expect(screen.queryByText(`${selectedOption}`).className).toContain(`${thisClassName}`)
      })
    })
    
    describe('on touch', () => {
      describe('on first touch', () => {
        it('should display all options', () => {
          renderPhone()
  
          // touch
          fireEvent.touchStart(options[0])  
  
          // check
          thisOptions.forEach(option => {
            expect(screen.queryByText(`${option}`)).not.toEqual(null)
          })
        })
      })
      
      describe('on second touch', () => {
        it('should only show selectedOption', () => {
          renderPhone() 
           
          // first touch
          fireEvent.touchStart(options[0])
          
          // second touch
          getParts()
          const newOption = options[1];
          fireEvent.touchStart(newOption)
  
          // test
          getParts()
          expect(options.length).toEqual(1) 
          expect(options[0].textContent).toEqual(selectedOption)
        })
      }) 
    }) 
  })
})
