import React from "react";

describe('<PictureBar pictures=[]/>', () => {
  describe('desktop', () => {
    describe('on render', () => [
      it('should render', () => {

      })

      describe('content', () => {
        it('should render each picture element in props.pictures', () => {

        })
      })
      
      describe('layout', () => {
        it(`should have style : {
          display: flex,
          flex-direction: column,
          justify-content: space-evenly,
          height: 100%,
        }`, () => {

        })
      })
    ]) 
  })
  
  describe('phone', () => {
    describe('on render', () => {
      it('should render', () => {

      })

      describe('content', () => {
        it('should only render props.selectedImage', () => {

        })
      }) 

      describe('on touch', () => {
        describe('first touch', () => {
          it('should render image for each pictureSrc in pictures', () => {

          })
        })

        describe('second touch', () => {
          it('should change selectedImage to touched image', () => {

          })

          it('should only render props.selectedImage', () => {

          })
        })
      })
    })
  })  
})