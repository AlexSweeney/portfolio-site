import React, { useState } from "react";
import { render, cleanup } from '@testing-library/react';
import { fireEvent, screen } from "@testing-library/dom";
import Metronome from './../../data/imgs/metronome.jpg';
import Picture from './Picture.jsx';
import { colors, fonts } from './../../styles/styles.js';
import { hexToRGB } from './../../utils/testUtils.js';

let pictureContainer;
let picture;
let pictureTextContainer;
let heading;
let links;
let linkHeaders;

const title = 'example-title';
const image = Metronome;
const appAddress = 'app';
const sourceAddress = 'source';

function getParts() {
  pictureContainer = document.querySelector('.picture-container');
  pictureTextContainer = document.querySelector('.picture-text-container');
  picture = document.querySelector('.picture');
  heading = document.querySelector('.picture-heading');
  links = document.querySelector('.links');
  linkHeaders = document.querySelectorAll('.link')
}

beforeEach(() => {
  render(<Picture image={image} title={title} appAddress={appAddress} sourceAddress={sourceAddress}/>)
  getParts()
})

describe('<Picture/>', () => {
  describe('on render', () => {
    describe('render', () => {
      it('should render', () => {
        expect(picture).toBeTruthy()
      })
    })

    describe('style', () => {
      describe('layout', () => { 
        describe('.picture-container', () => {
          it(`should have style = {
            position: relative,
          }`, () => {
            expect(pictureContainer.style.position).toEqual('relative')
          })
        })

        describe('.picture-text-container', () => {
          it(`should have style = {
            position: absolute,
            top: 0px,
            width: 100%,
            height: 100%,
            display: flex,
            flex-direction: column,
            justify-content: space-between,
            box-sizing: border-box,
          }`, () => {
            expect(pictureTextContainer.style.position).toEqual('absolute')
            expect(pictureTextContainer.style.top).toEqual('0px')
            expect(pictureTextContainer.style.width).toEqual('100%')
            expect(pictureTextContainer.style.height).toEqual('100%')
            expect(pictureTextContainer.style.display).toEqual('flex')
            expect(pictureTextContainer.style.flexDirection).toEqual('column')
            expect(pictureTextContainer.style.justifyContent).toEqual('space-between')
            expect(pictureTextContainer.style.boxSizing).toEqual('border-box')
          })
        })

        describe('.picture', () => {
          it(`should have style = { 
            backgroundSize: '90%',
            backgroundRepeat: 'no-repeat',  
            backgroundImage: url(props.image), 
            width: 100%,
            height: 100%,
          }`, () => { 
            console.log(picture.style.backgroundPosition)
            expect(picture.style.backgroundSize).toEqual('90%')
            expect(picture.style.backgroundRepeat).toEqual('no-repeat') 
            expect(picture.style.backgroundImage).toEqual(`url(${image})`)
            expect(picture.style.width).toEqual('100%')
            expect(picture.style.height).toEqual('100%')
          })
        }) 

        describe('.links', () => {
          it(`it should have style = {
            display: 'flex',
            justifyContent: 'space-around',
          }`, () => {
            expect(links.style.display).toEqual('flex')
            expect(links.style.justifyContent).toEqual('space-around')
          })
        })
        
        describe('.picture-heading', () => {
          it(`should have style = {
            display: flex,
            justifyContent: center,
            margin: 0px,
          }`, () => {
            expect(heading.style.display).toEqual('flex')
            expect(heading.style.justifyContent).toEqual('center')
            expect(heading.style.margin).toEqual('0px')
          })
        }) 
      })

      describe('style', () => {
        describe('.picture', () => {
          it(`should have style = {
            backgroundColor: 'white',
            opacity: '0.2',
            borderRadius: '4%',
          }`, () => {
            expect(picture.style.backgroundColor).toEqual('white')
            expect(picture.style.opacity).toEqual('0.2')
            expect(picture.style.borderRadius).toEqual('4%')
          })
        })

        describe('.picture-heading', () => {
          it(`should have style = {
            fontFamily: fonts.body,
            color: colors.font.light, 
            cursor: default,
          }`, () => {
            const targetColor = hexToRGB(colors.font.light);
            
            expect(heading.style.fontFamily).toEqual(fonts.body)
            expect(heading.style.color).toEqual(targetColor)
            expect(heading.style.cursor).toEqual('default')
          })
        })

        describe('.links', () => {
          it(`should have style = {
            fontFamily: fonts.body,
            color: colors.font.light,
          }`, () => {
            const targetColor = hexToRGB(colors.font.light);

            expect(links.style.fontFamily).toEqual(fonts.body)
            expect(links.style.color).toEqual(targetColor) 
          })
        })

        describe('.link', () => {
          it(`should have style = {
            cursor: pointer,
          }`, () => {
            linkHeaders.forEach(linkHeader => {
              expect(linkHeader.style.cursor).toEqual('pointer')
            })
          })
        })
      })

      describe('content', () => {
        describe('.picture-heading', () => {
          it('should have text : props.title', () => {
            expect(heading.textContent).toEqual(title)
          })
        })

        describe('.links', () => {
          it('should have text "App"', () => {
            expect(screen.getByText('App')).toBeTruthy()
          })

          it('should have text "Source"', () => {
            expect(screen.getByText('Source')).toBeTruthy()
          })

          describe('App link', () => {
            it('should have link to props.appAddress', () => {
              expect(screen.getByText('App').href).toEqual('http://localhost/app')
            })
          })

          describe('Source link', () => {
            it('should have link to props.sourceAddress', () => {
              expect(screen.getByText('Source').href).toEqual('http://localhost/source')
            })
          })
        })
      })
    })
  })
})