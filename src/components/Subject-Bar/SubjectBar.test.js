import React from "react";
import { render, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SubjectBar from './SubjectBar.jsx';
import { colors, fonts } from './../../styles/styles.js';

const thisSubjects = ['subject-1', 'subject-2', 'subject-3'];

let subjectBar;
let subjects;

let selectedSubject;
let setSelectedSubject;

beforeEach(() => {
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

describe('<SubjectBar subjects={}/>', () => {
  describe('desktop', () => {
    describe('on render', () => {
      it('should render', () => {
        expect(subjectBar).not.toEqual(null)
      })

      describe('content', () => {
        it('should show text for each subject', () => {
          subjects.forEach((subject, i) => {
            expect(subject.textContent).toEqual(thisSubjects[i])
          })
        })
      })

      describe('style', () => {
        describe('background', () => {
          it('should have style.background = colors.background.highlight', () => {
            expect(subjectBar.style.background).toEqual(colors.background.highlight)
          })
        })

        describe('font', () => {
          it('should have style.fontFamily = fonts.head', () => {
            expect(subjectBar.style.fontFamily).toEqual(fonts.head)
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
      it('should call props.onSelect with text content of clicked subject', () => {
        userEvent.click(subject[1])

        expect(onSelect).toHaveBeenCalledTimes(1)
        expect(onSelect).toHaveBeenCalledWith(thisSubjects[1])
      })
    })
  })

  describe('phone', () => {
    describe('on render', () => {
      it('should display only selected subject', () => {
        expect(screen.getByText(/`${selectedSubject}`/)).not.toEqual(null)

        subjects.forEach(subject => {
          expect(screen.getByText(/`${subject}`/)).toEqual(null)
        })
      })
    })
    
    describe('on click', () => {
      it('should display all subjects', () => {
        subjects.forEach(subject => {
          if(subject === selectedSubject) {
            userEvent.click(subject)
          }
        })

        subjects.forEach(subject => {
          expect(screen.getByText(/`${subject}`/)).not.toEqual(null)
        })
      })

      it('should set new selected subject', () => {
        subjects.forEach(subject => {
          if(subject === selectedSubject) {
            userEvent.click(subject)
          }
        })

        userEvent.click(subjects[2])
        expect(selectedSubject).toEqual(thisSubjects[2])
      }) 
    })

    describe('on second click', () => { 
      it('only show new selected subject', () => {
        // double click
        subjects.forEach(subject => {
          if(subject === selectedSubject) {
            userEvent.dblClick(subject) 
          }
        })
        
        subjects.forEach(subject => {
          if(subject === selectedSubject) {
            expect(screen.getByText(/`${subject}`/)).not.toEqual(null)
          } else {
            expect(screen.getByText(/`${subject}`/)).toEqual(null)
          }
        })
      })
    })
  })
})
