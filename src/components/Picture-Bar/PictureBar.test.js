import React from "react";
import PictureBar from './PictureBar.jsx';

const thisPictures = [<div className="picture-1"></div>, <div className="picture-2"></div>, <div className="picture-3"></div>];

// ==================================== Util fns ==================================== //
function renderDesktop() { 
	isDesktop = true;  

  render(<PictureBar pictures={pictures}/>) 
	getParts()
}

function renderPhone() { 
	isDesktop = false; 
  
  render(<PictureBar pictures={pictures}/>) 
	getParts()
}

function getParts() {
  pictures = document.querySelectorAll('.subject');
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
describe('<PictureBar pictures=[]/>', () => {
  describe('desktop', () => {
    describe('on render', () => [
      it('should render', () => {
        renderDesktop()

        expect(pictureBar).not.toEqual(null)
      })

      describe('content', () => {
        it('should render each picture element in props.pictures', () => {
          renderDesktop()

          pictures.forEach((picture, i) => {
            expect(picture).toEqual(thisPictures[i])
          })
        })
      })
      
      describe('layout', () => {
        it(`should have style : {
          display: flex,
          flex-direction: column,
          justify-content: space-evenly,
          height: 100%,
        }`, () => {
          renderDesktop()

          expect(pictureBar.style.display).toEqual('flex')
          expect(pictureBar.style.flexDirection).toEqual('column')
          expect(pictureBar.style.justifyContent).toEqual('space-evenly')
          expect(pictureBar.style.height).toEqual('100%')
        })
      })
    ]) 
  })
  
  describe('phone', () => {
    describe('on render', () => {
      it('should render', () => {
        renderPhone()

        expect(pictureBar).not.toEqual(null)
      })

      describe('content', () => {
        it('should only render props.selectedImage', () => {
          expect(pictures.length).toEqual(1)

          expect(pictures[0]).toEqual(selectedImage)
        })
      }) 

      describe('layout', () => {
        it(`should have style = {
          width: 100%,
          height: 100%,
        }`, () => {
          expect(pictureBar.style.width).toEqual('100%')
          expect(pictureBar.style.height).toEqual('100%')
        })
      })

      describe('on touch', () => {
        describe('first touch', () => {
          it('should render image for each picture in props.pictures', () => {
            fireEvent.touchStart(pictures[0])

            expect(pictures.length).toEqual(thisPictures.length)

            pictures.forEach((picture, i) => {
              expect(picture).toEqual(thisPictures[i])
            })
          })
        })

        describe('second touch', () => {
          it('should change selectedImage to touched image', () => {
            // open menu
            fireEvent.touchStart(pictures[0])

            // select new pic
            fireEvent.touchStart(pictures[1])

            expect(selectedImage).toEqual(thisPictures[1])
          })

          it('should only render props.selectedImage', () => {
            // open menu
            fireEvent.touchStart(pictures[0])

            // select new pic
            fireEvent.touchStart(pictures[1])

            expect(pictures.length).toEqual(1)
            expect(pictures[0]).toEqual(thisPictures[1])
          })
        })
      })
    })
  })  
})