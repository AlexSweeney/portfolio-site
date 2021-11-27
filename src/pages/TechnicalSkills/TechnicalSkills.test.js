import React from "react";
import TechnicalSkills from './TechnicalSkills.jsx';
import { render, cleanup } from '@testing-library/react';
import { fireEvent } from "@testing-library/dom";
import { hexToRGB } from "../../utils/testUtils.js";
import { colors, fonts } from "../../styles/styles.js";

// ==================================== Consts & vars ==================================== //
const data = {
  'subject-1' : { 
    'topic-1-1': ['project-1', 'project-2'],
    'topic-1-2': ['project-1', 'project-3'],
    'topic-1-3': ['project-2'], 
  },
  'subject-2' : { 
    'topic-2-1': ['project-1', 'project-2'],
    'topic-2-2': ['project-1', 'project-3'],
    'topic-2-3': ['project-2'], 
  },
  'subject-3' : { 
    'topic-3-1': ['project-1', 'project-2'],
    'topic-3-2': ['project-1', 'project-3'],
    'topic-3-3': ['project-2'], 
  }
};

const allSubjects = Object.keys(data);

let isDesktop;

let technicalSkills;
let subjectBar;
let subjects;
let topicBar;
let topics;
let pictureBar;
let pictures;

// ==================================== Utils Fns ==================================== //
function renderDesktop() { 
	isDesktop = true;

  render(<TechnicalSkills data={data}/>)
	getParts()
}

function renderPhone() { 
	isDesktop = false; 

  render(<TechnicalSkills data={data}/>)
	getParts()
}

function getParts() {
	technicalSkills = document.querySelector('.technical-skills');

  subjectBar = document.querySelector('.subject-bar');
  subjects = subjectBar && subjectBar.querySelectorAll('.subject');

  topicBar = document.querySelector('.topic-bar');
  topics = topicBar && topicBar.querySelectorAll('.topic');

  pictureBar = document.querySelector('.picture-bar');
  pictures = pictureBar && pictureBar.querySelectorAll('.picture-container');
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
describe('<TechnicalSkills data={data}/>', () => {
  describe('desktop', () => {
    describe('render', () => {
      it('should render', () => {
        renderDesktop()

        expect(technicalSkills).toBeTruthy()
      })
    })

    describe('content', () => {
      it('should render .subject-bar', () => {
        renderDesktop()

        expect(subjectBar).toBeTruthy()
      })

      it('should render .topic-bar', () => {
        renderDesktop()

        expect(topicBar).toBeTruthy()
      })

      it('should render .picture-bar', () => {
        renderDesktop()

        expect(pictureBar).toBeTruthy()
      })
    })

    describe('.technical-skills', () => {
      describe('layout', () => {
        it(`should have style = {
          background: colors.background.dark,
          display: flex;
          justify-content: space-between;
        }`, () => {
          renderDesktop()

          const res = hexToRGB(colors.background.darker)

          expect(technicalSkills.style.background).toEqual(res)
          expect(technicalSkills.style.display).toEqual('flex')
          expect(technicalSkills.style.justifyContent).toEqual('space-between')
        })
      })  
    })
   
    describe('.subject-bar', () => {
      describe('content', () => {
        it('should display all subjects: "subject-1, subject-2, subject-3"', () => {
          renderDesktop()

          const targetSubjects = ['subject-1', 'subject-2', 'subject-3'];

          subjects.forEach((subject, i) => {
            expect(subject.textContent).toEqual(targetSubjects[i])
          })
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flexDirection: column;
          width: 33.33%;
        }`, () => {
          renderDesktop()

          expect(subjectBar.style.display).toEqual('flex')
          expect(subjectBar.style.flexDirection).toEqual('column')
          expect(subjectBar.style.width).toEqual('33.33%')
        })
      })  

      describe('style', () => {
        describe('background', () => {
          it('should have style.background = colors.background.highlight', () => {
            renderDesktop()

            const res = hexToRGB(colors.background.highlight)
            expect(subjectBar.style.background).toEqual(res)
          })

          it('should have style.opacity = 0.9', () => {
            renderDesktop()
 
            expect(subjectBar.style.opacity).toEqual('0.9')
          })
        })
        
        describe('font', () => {
          it('should have fontFamily: fonts.head', () => {
            renderDesktop()

            expect(subjectBar.style.fontFamily).toEqual(fonts.head)
          })

          it('should have color: colors.font.light', () => {
            renderDesktop()

            const res = hexToRGB(colors.font.light)
            expect(subjectBar.style.color).toEqual(res)
          })
        }) 
      })

      describe('on click', () => {
        it('should add class "selected-subject" to clicked subject', () => {
          renderDesktop()

          fireEvent.click(subjects[1])

          subjects.forEach((subject, i) => {
            if(i === 1) {
              expect(subject.className).toContain('selected-subject')
            } else { 
              expect(subject.className).not.toContain('selected-subject')
            }
          })
        })
      })
    })
  
    describe('.topic-bar', () => {
      describe('content', () => {
        it('should display data[selectedSubject].topics : topic-1-1, topic-1-2, topic-1-3', () => {
          renderDesktop()

          const targetTopics = ['topic-1-1', 'topic-1-2', 'topic-1-3'];

          expect(topics.length).toEqual(targetTopics.length)

          topics.forEach((topic, i) => {
            expect(topic.textContent).toEqual(targetTopics[i])
          })
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flexDirection: column; 
        }`, () => {
          renderDesktop()

          expect(topicBar.style.display).toEqual('flex')
          expect(topicBar.style.flexDirection).toEqual('column')
        })
      })

      describe('style', () => {
        describe('font', () => {
          it('should have fontFamily: fonts.head', () => {
            renderDesktop()

            expect(topicBar.style.fontFamily).toEqual(fonts.head)
          })

          it('should have color: colors.font.light', () => {
            renderDesktop()

            const res = hexToRGB(colors.font.light);
            expect(topicBar.style.color).toEqual(res)
          })
        }) 
      })

      describe('on click', () => {
        it('should add "selected-topic" to the clicked topic', () => {
          renderDesktop()

          fireEvent.click(topics[1])

          topics.forEach((topic, i) => {
            if(i === 1) {
              expect(topic.className).toContain('selected-topic')
            } else {
              expect(topic.className).not.toContain('selected-topic')
            }
          })
        })
      })
    })
  
    describe('.picture-bar', () => {
      describe('content', () => {
        it('should display pictures from data[selectedSubject][selectedTopic] = project-1, project-2', () => {
          renderDesktop()

          const targetPictures = ['project-1', 'project-2'];

          pictures.forEach((picture, i) => { 
            expect(picture.textContent).toEqual(targetPictures[i])
          })
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flexDirection: column; 
        }`, () => {
          renderDesktop()

          expect(pictureBar.style.display).toEqual('flex')
          expect(pictureBar.style.flexDirection).toEqual('column')
        })
      })
    })
  })

  describe('phone', () => {
    describe('.technical-skills', () => {
      describe('render', () => {
        it('should render', () => {
          renderPhone()

          expect(technicalSkills).toBeTruthy()
        })
      })
      
      describe('content', () => {
        it('should render .subject-bar', () => {
          renderPhone()

          expect(subjectBar).toBeTruthy()
        })
  
        it('should render .topic-bar', () => {
          renderPhone()

          expect(topicBar).toBeTruthy()
        })
  
        it('should render .picture-bar', () => {
          renderPhone()

          expect(pictureBar).toBeTruthy()
        })
      })

      describe('style', () => {
        describe('background', () => {
          it('should have background: colors.background.dark', () => {
            renderPhone()

            const res = hexToRGB(colors.background.darker)

            expect(technicalSkills.style.background).toEqual(res)
          })
        })

        describe('layout', () => {
          it(`should have style = {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          }`, () => {
            renderPhone()
  
            expect(technicalSkills.style.display).toEqual('flex')
            expect(technicalSkills.style.flexDirection).toEqual('column')
            expect(technicalSkills.style.justifyContent).toEqual('space-evenly')
          })
        })
      }) 
    })
   
    describe('.subject-bar', () => {
      describe('content', () => {
        it('should only display selectedSubject', () => {
          renderPhone()

          expect(subjects.length).toEqual(1)
          expect(subjects[0].className).toContain('selected-subject')
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          justify-content: center;
          align-items: center;
        }`, () => {
          renderPhone()

          expect(subjectBar.style.display).toEqual('flex')
          expect(subjectBar.style.justifyContent).toEqual('center')
          expect(subjectBar.style.alignItems).toEqual('center')
        })
      })

      describe('style', () => {
        describe('background', () => {
          it('should have background = colors.background.highlight', () => {
            renderPhone()
            const res = hexToRGB(colors.background.highlight);

            expect(subjectBar.style.background).toEqual(res)
          })  

          it('should have opacity: 0.9', () => {
            renderPhone()
            
            expect(subjectBar.style.opacity).toEqual('0.9')
          })
        })

        describe('text', () => {
          it('should have fontFamily = fonts.head', () => {
            renderPhone()

            expect(subjectBar.style.fontFamily).toEqual(fonts.head)
          })

          it('should have color = colors.font.light', () => {
            renderPhone()
            const res = hexToRGB(colors.font.light);

            expect(subjectBar.style.color).toEqual(res)
          })
        })
      })

      describe('on touch', () => {
        it('should display all subjects', () => {
          renderPhone()

          fireEvent.touchStart(subjects[0])
          subjects = subjectBar.querySelectorAll('.subject');

          expect(subjects.length).toEqual(allSubjects.length)
          subjects.forEach((subject, i) => {
            expect(subject.textContent).toEqual(allSubjects[i])
          })
        })
      })

      describe('on second touch', () => {
        it('should change props.selctedSubject to touched subject', () => {
          renderPhone()

          // open subjects
          fireEvent.touchStart(subjects[0])
          subjects = subjectBar.querySelectorAll('.subject');

          // select subject
          fireEvent.touchStart(subjects[1])
          subjects = subjectBar.querySelectorAll('.subject');
          
          // check
          expect(subjects[0].textContent).toEqual(allSubjects[1])
        })

        it('should only show props.selectedSubject', () => {
          renderPhone()

          // open subjects
          fireEvent.touchStart(subjects[0])
          subjects = subjectBar.querySelectorAll('.subject');

          // select subject
          fireEvent.touchStart(subjects[1])
          subjects = subjectBar.querySelectorAll('.subject');
          
          // check
          expect(subjects.length).toEqual(1)
          expect(subjects[0].textContent).toEqual(allSubjects[1])
        })
      })
    })
  
    describe('.topic-bar', () => {
      describe('content', () => {
        it('should only display selectedTopic', () => {
          renderPhone()

          expect(topics.length).toEqual(1)
          expect(topics[0].className).toContain('selected-topic')
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          justify-content: center;
          align-items: center;
        }`, () => {
          renderPhone()

          expect(topicBar.style.display).toEqual('flex')
          expect(topicBar.style.justifyContent).toEqual('center')
          expect(topicBar.style.alignItems).toEqual('center')
        })
      })

      describe('style', () => {  
        describe('text', () => {
          it('should have fontFamily = fonts.head', () => {
            renderPhone()

            expect(topicBar.style.fontFamily).toEqual(fonts.head)
          })

          it('should have color = colors.font.light', () => {
            renderPhone()

            const res = hexToRGB(colors.font.light);
            expect(topicBar.style.color).toEqual(res)
          })
        })
      })

      describe('on touch', () => {
        it('should display all topics', () => {
          renderPhone()

          // touch 
          fireEvent.touchStart(topics[0])
          topics = document.querySelectorAll('.topic');

          // check  
          const subjectNames = Object.keys(data);
          const topicNames = Object.keys(data[subjectNames[0]]);
  
          expect(topics.length).toEqual(topicNames.length)

          topics.forEach((topic, i) => {
            expect(topic.textContent).toEqual(topicNames[i])
          })
        })
      })

      describe('on second touch', () => {
        it('should change selectedTopic to touched topic', () => {
          renderPhone()

          // touch
          fireEvent.touchStart(topics[0])
          topics = document.querySelectorAll('.topic');

          // touch
          const targetText = topics[1].textContent;
          fireEvent.touchStart(topics[1])
          topics = document.querySelectorAll('.topic');

          // check
          expect(topics[0].textContent).toEqual(targetText)
        })

        it('should only show props.selectedTopic', () => {
          renderPhone()

          // touch
          fireEvent.touchStart(topics[0])
          topics = document.querySelectorAll('.topic');

          // touch
          fireEvent.touchStart(topics[1])
          topics = document.querySelectorAll('.topic');

          // check
          expect(topics[0].className).toContain('selected-topic')
          expect(topics.length).toEqual(1)
        })
      })
    })
  
    describe('.picture-bar', () => {
      describe('content', () => {
        it('should only show selectedPicture', () => {
          renderPhone()
          
          expect(pictures.length).toEqual(1)
          expect(pictures[0].className).toContain('selected-picture-container')
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          justify-content: center;
          align-items: center;
        }`, () => {
          renderPhone()

          expect(pictureBar.style.display).toEqual('flex')
          expect(pictureBar.style.justifyContent).toEqual('center')
          expect(pictureBar.style.alignItems).toEqual('center')
        })
      }) 

      describe('on touch', () => {
        it('should display all pictures', () => {
          renderPhone()

          // touch
          fireEvent.touchStart(pictures[0])
          pictures = document.querySelectorAll('.picture-container');

          // check
          const subjectNames = Object.keys(data);
          const topicNames = Object.keys(data[subjectNames[0]]);
          const thisPictures = data[subjectNames[0]][topicNames[0]]; 

          expect(pictures.length).toEqual(thisPictures.length)

          pictures.forEach((picture, i) => {
            expect(picture.textContent).toEqual(thisPictures[i])
          })
        })
      })

      describe('on second touch', () => {
        it('should change props.selectedPicture to touched picture', () => {
          renderPhone()

          // touch
          fireEvent.touchStart(pictures[0])
          pictures = document.querySelectorAll('.picture-container');

          // touch
          const targetPicture = pictures[1];
          fireEvent.touchStart(targetPicture)
          pictures = document.querySelectorAll('.picture-container');

          // check
          expect(pictures[0]).toEqual(targetPicture)
        })

        it('should only show props.selectedPicture', () => {
          renderPhone()

          // touch
          fireEvent.touchStart(pictures[0])
          pictures = document.querySelectorAll('.picture-container');

          // touch
          const targetPicture = pictures[1];
          fireEvent.touchStart(targetPicture)
          pictures = document.querySelectorAll('.picture-container');

          // check
          expect(pictures.length).toEqual(1)
          expect(pictures[0].className).toContain('selected-picture')
        })
      })
    })
  }) 
})