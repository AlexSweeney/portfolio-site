import React, { useState } from "react";
import { render, cleanup } from '@testing-library/react';
import { fireEvent } from "@testing-library/dom";
import PictureBar from './PictureBar.jsx';

// ==================================== Consts / Vars ================================ //
const thisPictures = [<div className="picture-1"></div>, <div className="picture-2"></div>, <div className="picture-3"></div>];
let selectedPicture;
let setSelectedPicture;

let isDesktop;
let pictureBar;
let pictures;

// ==================================== Util fns ==================================== //
function PictureBarWrapper() {
  [selectedPicture, setSelectedPicture] = useState(thisPictures[0]);

  return (
    <PictureBar 
      pictures={thisPictures} 
      selectedPicture={selectedPicture} 
      setSelectedPicture={setSelectedPicture}/>
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
    describe('on render', () => {
      it('should render', () => {
        renderDesktop()

        expect(pictureBar).not.toEqual(null)
      }) 

      describe('content', () => {
        it('should render each picture inside picture container element in props.pictures', () => {
          renderDesktop()

          expect(pictures.length).toEqual(thisPictures.length) 
 
          pictures.forEach((picture, i) => {   
            expect(picture.className).toEqual('picture-container')
            expect(picture.children[0].className).toEqual(thisPictures[i].props.className)
          })
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
  })
  
  describe('phone', () => {
    describe('on render', () => {
      it('should render', () => {
        renderPhone()

        expect(pictureBar).not.toEqual(null)
      })

      describe('content', () => {
        it('should only render .pictureContainer with props.selectedPicture', () => {
          renderPhone() 

          expect(pictures.length).toEqual(1)

          expect(pictures[0].className).toEqual('picture-container') 
          expect(pictures[0].children[0].className).toEqual(selectedPicture.props.className)
        })
      }) 

      describe('on touch', () => {
        describe('first touch', () => {
          it('should render .pictureContainer for each picture in props.pictures', () => {
            renderPhone()

            fireEvent.touchStart(pictures[0])
            pictures = document.querySelectorAll('.picture-container');

            expect(pictures.length).toEqual(thisPictures.length)

            pictures.forEach((picture, i) => {   
              expect(picture.className).toEqual('picture-container')
              expect(picture.children[0].className).toEqual(thisPictures[i].props.className)
            })
          })
        })

        describe('second touch', () => {
          it('should change props.selectedPicture to touched image', () => {
            renderPhone()
            // open menu
            fireEvent.touchStart(pictures[0])

            // select new pic
            pictures = document.querySelectorAll('.picture-container');
            fireEvent.touchStart(pictures[1])

            expect(selectedPicture.props.className).toEqual(thisPictures[1].props.className)
          })

          it('should only render props.selectedImage', () => {
            renderPhone()
            
            // open menu
            fireEvent.touchStart(pictures[0])

            // select new pic
            pictures = document.querySelectorAll('.picture-container');
            fireEvent.touchStart(pictures[1])

            // check 
            pictures = document.querySelectorAll('.picture-container');
            expect(pictures.length).toEqual(1) 
          })
        })
      })
    })
  })   
})