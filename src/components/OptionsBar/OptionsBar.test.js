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

// ==================================== Utils Fns ==================================== //
function OptionsBarWithWrapper() {
  [selectedOption, setSelectedOption] = useState(thisOptions[0]);

  return (
    <OptionsBar 
      options={thisOptions} 
      selectedOption={selectedOption} 
      setSelectedOption={setSelectedOption}
      className={thisClassName}
      style={thisStyle}
    />
  )
} 

function renderDesktop() { 
	isDesktop = true;  

  render(<OptionsBarWithWrapper/>) 
	getParts()
}

function renderPhone() { 
	isDesktop = false; 
  
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
  test.todo('className, arg')
  test.todo('style arg')
  test.todo('remove background test')
  test.todo('add selected class on click')

  describe.only('desktop', () => {
    describe('on render', () => {
      describe('render', () => {
        it('should render with className = `${props.className}-bar`', () => {
          renderDesktop()
          
          const thisOptionsBar = document.querySelector(`.${thisClassName}-bar`);
          
          expect(thisOptionsBar).not.toEqual(null)
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
        describe('props.styles', () => {
          it('should add styles from props.styles', () => {
            renderDesktop()

            Object.keys(thisStyle).forEach(key => {
              expect(optionsBar.style[key]).toEqual(thisStyle[key])
            })
          })
        })

        describe('background', () => {
          describe('.subject-bar', () => {
            it('should have style.height = 100vh', () => {
              renderDesktop()

              expect(optionsBar.style.height).toEqual('100vh')
            })
          }) 
        })

        describe('layout', () => {
          describe('.subject-bar', () => {
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
          }) 
        })

        describe('font', () => {
          describe('.subject', () => {
            it('should have style.fontFamily = fonts.head', () => {
              renderDesktop()

              subjects.forEach(subject => {
                expect(subject.style.fontFamily).toEqual(fonts.head)
              }) 
            })

            it('should have style.color = colors.font.light', () => {
              renderDesktop()

              const res = hexToRGB(colors.font.light);

              subjects.forEach(subject => {
                expect(subject.style.color).toEqual(res)
              }) 
            })

            it('should have style.textDecoration = "none"', () => {
              renderDesktop()

              subjects.forEach(subject => {
                expect(subject.style.textDecoration).toEqual('none')
              }) 
            })
          }) 
        })

        describe('layout', () => {
          it(`should have style = {
            display: flex,
            flexDirection: column, 
          }`, () => {
            renderDesktop()

            expect(optionsBar.style.display).toEqual('flex')
            expect(optionsBar.style.flexDirection).toEqual('column')
          })

          it('.subject should have padding: 32px', () => {
            renderDesktop()

            subjects.forEach(subject => {
              expect(subject.style.padding).toEqual('32px')
            }) 
          })
        })
      })
    })
    
    describe('on click', () => {
      it('should add class `selected-${className}` to clicked option, and remove from all other options', () => {
        renderDesktop()

        userEvent.click(options[1])

        options.forEach((option, i) => {
          if(i === 1) {
            expect(option.className).toContain(`selected-${thisClassName}`)
          } else {
            expect(option.className).not.toContain(`selected-${thisClassName}`)
          }
        }) 
      })
    })
  })

  describe('phone', () => {
    describe('on render', () => {
      it('should display only selected subject', () => { 
        renderPhone()

        expect(screen.queryByText(`${selectedSubject}`)).not.toEqual(null)

        subjects.forEach(subject => {
          expect(screen.queryByText(`${subject}`)).toEqual(null)
        })
      })
    })
    
    describe('on touch', () => {
      it('should display all subjects', () => {
        renderPhone()

        // touch
        fireEvent.touchStart(subjects[0])  

        // check
        thisSubjects.forEach(subject => {
          expect(screen.queryByText(`${subject}`)).not.toEqual(null)
        })
      })
    })

    describe('on second touch', () => {
      it('should change selectedSubject', () => {
        renderPhone() 

        // open menu
        fireEvent.touchStart(subjects[0])
        
        // select new option
        getParts()
        fireEvent.touchStart(subjects[1])

        // test
        expect(selectedSubject).toEqual(subjects[1].textContent)
      })

      it('should close all subjects except for clicked subject', () => {
        renderPhone()

        // open menu
        fireEvent.touchStart(subjects[0])
      
        // select new option
        getParts()
        fireEvent.touchStart(subjects[1])

        // test
        thisSubjects.forEach((subject, i) => {
          if(i === 1) { 
            expect(screen.queryByText(`${subject}`)).not.toEqual(null)
          } else {
            expect(screen.queryByText(`${subject}`)).toEqual(null)
          } 
        })
      }) 
    }) 
  })
})
