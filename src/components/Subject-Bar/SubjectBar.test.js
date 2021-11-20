import React from "react";
import { render, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import SubjectBar from './SubjectBar.jsx';
import { colors, fonts } from './../../styles/styles.js';
import { hexToRGB } from './../../utils/testUtils.js';

const thisSubjects = ['subject-1', 'subject-2', 'subject-3'];

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

let subjectBar;
let subjects;


let selectedSubject;
let setSelectedSubject;

beforeEach(() => {
  selectedSubject = thisSubjects[0];
  setSelectedSubject = jest.fn()

  render(<SubjectBar 
    subjects={thisSubjects} 
    selectedSubject={selectedSubject} 
    setSelectedSubject={setSelectedSubject}
  />)
  subjectBar = document.querySelector('.subject-bar');
  subjects = document.querySelectorAll('.subject');
})

afterEach(() => {
  cleanup()
})

describe('<SubjectBar subjects={[]} selectedSubject={""}  setSelectedSubject={""}/>', () => {
  describe('desktop', () => {
    describe('on render', () => {
      describe('.subject-bar', () => {
        it('should render', () => {
          expect(subjectBar).not.toEqual(null)
        })
      })
      
      describe('content', () => {
        describe('.subject', () => {
          it('should show text for each subject', () => {
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
              const res = hexToRGB(colors.background.highlight);
              expect(subjectBar.style.background).toEqual(res)
            })

            it('should have style.height = 100vh', () => {
              expect(subjectBar.style.height).toEqual('100vh')
            })
  
            it('should have style.opacity = 0.9', () => {
              expect(subjectBar.style.opacity).toEqual('0.9')
            })
          }) 
        })

        describe('font', () => {
          describe('.subject', () => {
            it('should have style.fontFamily = fonts.head', () => {
              subjects.forEach(subject => {
                expect(subject.style.fontFamily).toEqual(fonts.head)
              }) 
            })

            it('should have style.color = colors.font.light', () => {
              const res = hexToRGB(colors.font.light);

              subjects.forEach(subject => {
                expect(subject.style.color).toEqual(res)
              }) 
            })

            it('should have style.textDecoration = "none"', () => {
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
            expect(subjectBar.style.display).toEqual('flex')
            expect(subjectBar.style.flexDirection).toEqual('column')
          })

          it('.subject should have padding: 32px', () => {
            subjects.forEach(subject => {
              expect(subject.style.padding).toEqual('32px')
            }) 
          })
        })
      })
    })
    
    describe('on click', () => {
      it('should call props.setSelectedSubject with text content of clicked subject', () => {
        console.log(userEvent)
        userEvent.click(subjects[1])

        expect(setSelectedSubject).toHaveBeenCalledTimes(1)
        expect(setSelectedSubject).toHaveBeenCalledWith(thisSubjects[1])
      })
    })
  })

  // describe('phone', () => {
  //   describe('on render', () => {
  //     it('should display only selected subject', () => {
  //       expect(screen.getByText(/`${selectedSubject}`/)).not.toEqual(null)

  //       subjects.forEach(subject => {
  //         expect(screen.getByText(/`${subject}`/)).toEqual(null)
  //       })
  //     })
  //   })
    
  //   describe('on click', () => {
  //     it('should display all subjects', () => {
  //       subjects.forEach(subject => {
  //         if(subject === selectedSubject) {
  //           userEvent.click(subject)
  //         }
  //       })

  //       subjects.forEach(subject => {
  //         expect(screen.getByText(/`${subject}`/)).not.toEqual(null)
  //       })
  //     })

  //     it('should set new selected subject', () => {
  //       subjects.forEach(subject => {
  //         if(subject === selectedSubject) {
  //           userEvent.click(subject)
  //         }
  //       })

  //       userEvent.click(subjects[2])
  //       expect(selectedSubject).toEqual(thisSubjects[2])
  //     }) 
  //   })

  //   describe('on second click', () => { 
  //     it('only show new selected subject', () => {
  //       // double click
  //       subjects.forEach(subject => {
  //         if(subject === selectedSubject) {
  //           userEvent.dblClick(subject) 
  //         }
  //       })
        
  //       subjects.forEach(subject => {
  //         if(subject === selectedSubject) {
  //           expect(screen.getByText(/`${subject}`/)).not.toEqual(null)
  //         } else {
  //           expect(screen.getByText(/`${subject}`/)).toEqual(null)
  //         }
  //       })
  //     })
  //   })
  // })
})
