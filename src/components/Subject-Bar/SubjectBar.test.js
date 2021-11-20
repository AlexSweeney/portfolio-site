import React, { useEffect, useState } from "react";
import { render, cleanup } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import SubjectBar from './SubjectBar.jsx';
import { colors, fonts } from './../../styles/styles.js';
import { hexToRGB } from './../../utils/testUtils.js';


// ==================================== Consts & vars ==================================== //
const thisSubjects = ['subject-1', 'subject-2', 'subject-3'];

let isDesktop;

let subjectBar;
let subjects;

let selectedSubject;
let setSelectedSubject;

// ==================================== Utils Fns ==================================== //
function SubjectBarWithWrapper() {
  [selectedSubject, setSelectedSubject] = useState(thisSubjects[0]);

  return (
    <SubjectBar 
      subjects={thisSubjects} 
      selectedSubject={selectedSubject} 
      setSelectedSubject={setSelectedSubject}
    />
  )
} 

function renderDesktop() { 
	isDesktop = true;  

  render(<SubjectBarWithWrapper/>) 
	getParts()
}

function renderPhone() { 
	isDesktop = false; 
  
  render(<SubjectBarWithWrapper/>) 
	getParts()
}

function getParts() {
  subjectBar = document.querySelector('.subject-bar');
  subjects = document.querySelectorAll('.subject');
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

describe('<SubjectBar subjects={[]} selectedSubject={""}  setSelectedSubject={""}/>', () => {
  describe('desktop', () => {
    describe('on render', () => {
      describe('.subject-bar', () => {
        it('should render', () => {
          renderDesktop()

          expect(subjectBar).not.toEqual(null)
        })
      })
      
      describe('content', () => {
        describe('.subject', () => {
          it('should show text for each subject', () => {
            renderDesktop()

            subjects.forEach((subject, i) => {
              expect(subject.textContent).toEqual(thisSubjects[i])
            })
          })
        }) 
      })

      describe('style', () => {
        describe('background', () => {
          describe('.subject-bar', () => {
            it('should have style.background = colors.background.highlight', () => {
              renderDesktop()

              const res = hexToRGB(colors.background.highlight);
              expect(subjectBar.style.background).toEqual(res)
            })

            it('should have style.height = 100vh', () => {
              renderDesktop()

              expect(subjectBar.style.height).toEqual('100vh')
            })
  
            it('should have style.opacity = 0.9', () => {
              renderDesktop()

              expect(subjectBar.style.opacity).toEqual('0.9')
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

              expect(subjectBar.style.display).toEqual('flex')
              expect(subjectBar.style.flexDirection).toEqual('column')
              expect(subjectBar.style.height).toEqual('')
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

            expect(subjectBar.style.display).toEqual('flex')
            expect(subjectBar.style.flexDirection).toEqual('column')
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
      it('should set selectedSubject to clicked subject', () => {
        renderDesktop()

        userEvent.click(subjects[1])

        expect(selectedSubject).toEqual(thisSubjects[1]) 
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
