import React from "react";
import TechnicalSkills from './TechnicalSkills.jsx';

const data = {
  'subject-1' : {
    topics: {
      'topic-1-1': ['project-1', 'project-2'],
      'topic-1-2': ['project-1', 'project-3'],
      'topic-1-2': ['project-2'],
    }
  },
  'subject-2' : {
    topics: {
      'topic-2-1': ['project-1', 'project-2'],
      'topic-2-2': ['project-1', 'project-3'],
      'topic-2-3': ['project-2'],
    }
  },
  'subject-3' : {
    topics: {
      'topic-3-1': ['project-1', 'project-2'],
      'topic-3-2': ['project-1', 'project-3'],
      'topic-3-3': ['project-2'],
    }
  }
}

describe('<TechnicalSkills data={data}/>', () => {
  describe('desktop', () => {
    describe('render', () => {
      it('should render', () => {

      })
    })

    describe('.technical-skills', () => {
      describe('layout', () => {
        it(`should have style = {
          display: flex;
          justify-content: space-between;
        }`, () => {

        })
      })  
    })
   
    describe('.subject-bar', () => {
      describe('content', () => {
        it('should display all subjects: "subject-1, subject-2, subject-3"', () => {
          
        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flexDirection: column;
          width: 33.3333%;
        }`, () => {

        })
      })  

      describe('style', () => {
        describe('background', () => {
          it('should have style = colors.background.highlight', () => {

          })
        })
        
        describe('font', () => {
          it('should have fontFamily: fonts.head', () => {

          })

          it('should have color: colors.font.light', () => {

          })
        }) 
      })

      describe('on click', () => {
        it('should change props.selectedSubject to clicked subject', () => {

        })
      })
    })
  
    describe('.topic-bar', () => {
      describe('content', () => {
        it('should display data[selectedSubject].topics : topic-1-1, topic-1-2, topic-1-3', () => {

        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flexDirection: column;

        }`, () => {

        })
      })

      describe('style', () => {
        describe('font', () => {
          it('should have fontFamily: fonts.head', () => {

          })

          it('should have color: colors.font.light', () => {

          })
        }) 
      })

      describe('on click', () => {
        it('should set props.selectedTopic to the clicked topic', () => {

        })
      })
    })
  
    describe('.picture-bar', () => {
      describe('content', () => {
        it('should display pictures from data[selectedSubject][selectedTopic]', () => {

        })
      })

      describe('layout', () => {
        it(`should have style = {
          display: flex;
          flexDirection: column;

        }`, () => {

        })
      })
    })
  })

  describe('phone', () => {
    describe('.technical-skills', () => {
      describe('content', () => {

      })

      describe('layout', () => {

      })

      describe('style', () => {

      })

      describe('on click', () => {
        
      })
    })
   
    describe('.subject-bar', () => {
      describe('content', () => {

      })

      describe('layout', () => {

      })

      describe('style', () => {

      })

      describe('on click', () => {
        
      })
    })
  
    describe('.topic-bar', () => {
      describe('content', () => {

      })

      describe('layout', () => {

      })

      describe('style', () => {

      })

      describe('on click', () => {
        
      })
    })
  
    describe('.picture-bar', () => {
      describe('content', () => {

      })

      describe('layout', () => {

      })

      describe('style', () => {

      })

      describe('on click', () => {
        
      })
    })
  }) 
})