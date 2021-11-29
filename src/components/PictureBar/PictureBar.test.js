import React, { useState } from "react";
import { render, cleanup } from '@testing-library/react';
import { fireEvent } from "@testing-library/dom";
import PictureBar from './PictureBar.jsx';

// ==================================== Consts / Vars ================================ //
const thisPictures = [<div className="picture-1">picture 1</div>, <div className="picture-2">picture 2</div>, <div className="picture-3">picture 3</div>];
const thisStyle = {
  color: 'red',
  background: 'yellow',
};

let selectedPicture;
let setSelectedPicture;
let handleClick;

let isDesktop;
let pictureBar;
let pictures;

// ==================================== Util fns ==================================== //
function PictureBarWrapper() {
  [selectedPicture, setSelectedPicture] = useState(thisPictures[0]);
  handleClick = jest.fn()

  return (
    <PictureBar 
      pictures={thisPictures} 
      selectedPicture={selectedPicture} 
      setSelectedPicture={setSelectedPicture}
      handleClick={handleClick}
      style={thisStyle}/>
  )
}

function renderDesktop() { 
	isDesktop = true;  

  render(<PictureBarWrapper/>) 
	getParts()
}

function renderPhone() { 
	isDesktop = false; 
  
  render(<PictureBarWrapper/>) 
	getParts()
}

function getParts() {
  pictureBar = document.querySelector('.picture-bar');
  pictures = document.querySelectorAll('.picture-container');
}

function resetVals() {
  handleClick = null;
  isDesktop = null;
  pictureBar = null;
  pictures = null;
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
  resetVals()
})

// ==================================== Tests ======================================= //
describe('<PictureBar/>', () => {
  describe('desktop', () => { 
    describe('on render', () => {
      describe('render', () => {
        it('should render', () => {
          renderDesktop()
  
          expect(pictureBar).toBeTruthy()
        }) 
      })
       
      describe('content', () => {
        it('should render each picture inside picture container element in props.pictures', () => {
          renderDesktop()

          expect(pictures.length).toEqual(thisPictures.length) 
 
          pictures.forEach((picture, i) => {   
            expect(picture.className).toContain('picture-container')
            expect(picture.children[0].className).toEqual(thisPictures[i].props.className)
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

        it('should add styles from props.style', () => {
          renderDesktop()

          Object.keys(thisStyle).forEach(key => {
            expect(pictureBar.style[key]).toEqual(thisStyle[key])
          })
        })
      }) 
    }) 
  })
  
  describe('phone', () => {
    describe('on render', () => {
      it('should render', () => {
        renderPhone()

        expect(pictureBar).toBeTruthy()
      })

      describe('content', () => {
        it('should only render .pictureContainer with props.selectedPicture', () => {
          renderPhone() 

          expect(pictures.length).toEqual(1)

          expect(pictures[0].className).toContain('picture-container') 
          expect(pictures[0].children[0].className).toEqual(selectedPicture.props.className)
        })
      })  
    })

    describe('on touch', () => {
      it('should call props.handleClick with touched picture', () => {
        renderPhone()

        // touch
        fireEvent.touchStart(pictures[0])
 
        expect(handleClick).toHaveBeenCalledTimes(1)
        expect(handleClick).toHaveBeenCalledWith(thisPictures[0])
      })

      describe('on first touch', () => { 
        it('should show all pictures', () => {
          renderPhone()

          // touch
          fireEvent.touchStart(pictures[0])
          
          // check
          pictures = document.querySelectorAll('.picture-container');
          expect(pictures.length).toEqual(thisPictures.length)

          pictures.forEach((picture, i) => { 
            expect(picture.children[0].className).toContain(thisPictures[i].props.className)
          })
        }) 
      }) 
      
      describe('on second touch', () => { 
        it('should only show picture that matches props.selectedPicture', () => {
          renderPhone()

          // open
          fireEvent.touchStart(pictures[0])

          // touch
          pictures = document.querySelectorAll('.picture-container');
          const newPic = pictures[1];
          fireEvent.touchStart(newPic)

          // check
          pictures = document.querySelectorAll('.picture-container');
          expect(pictures.length).toEqual(1)

          // console.log(pictures[0]) 
          expect(pictures[0].children[0].className).toEqual("picture-1")
        }) 
      })
    })
  })   
})