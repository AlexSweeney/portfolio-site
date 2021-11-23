import React from 'react';

describe('<Project picture=[<img/>] picStyle={} textStyle={}>Text</Project>', () => {
  describe('desktop', () => {
    describe('on render', () => {
      test('it should render', () => {
  
      })
  
      describe('layout', () => {
        describe('text', () => {
          it(`should have style = {
            position: absolute,
            left: props.textStyle.left,
            top: props.textStyle.top,
          }`, () => {
  
          })
        })
  
        describe('picture', () => {
          it(`should have style = {
            position: absolute,
            left: props.picStyle.left,
            top: props.picStyle.top,
          }`, () => {
  
          })
        })
      })
  
      describe('text', () => {
        test('it should display children', () => {
  
        })
        
        describe('.header', () => {
          test('it should have fontFamily = fonts.head', () => {

          })

          test('it should have color = colors.font.light', () => {

          })
        })

        describe('.body', () => {
          test('it should have fontFamily = fonts.body', () => {

          })

          test('it should have color = colors.font.light', () => {

          })
        }) 
      }) 
    })
  }) 

  describe('phone', () => {
    describe('on render', () => {
      test('it should render', () => {
  
      })
  
      describe('layout', () => {
        describe('text', () => {
          it(`should have style = {
            display: flex,
            justify-content: center,
            align-items: flex-start,
          }`, () => {
  
          })
        })
  
        describe('picture', () => {
          it(`should have style = {
            position: absolute,
            left: props.picStyle.left,
            top: props.picStyle.top,
          }`, () => {
  
          })
        })
      })
  
      describe('text', () => {
        test('it should display children', () => {
  
        })
        
        describe('.header', () => {
          test('it should have fontFamily = fonts.head', () => {

          })

          test('it should have color = colors.font.light', () => {

          })
        })

        describe('.body', () => {
          test('it should have fontFamily = fonts.body', () => {

          })

          test('it should have color = colors.font.light', () => {

          })
        }) 
      }) 
    })
  }) 
})