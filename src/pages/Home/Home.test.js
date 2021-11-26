import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { fonts, colors } from '../../styles/styles.js';
import Home from './Home.jsx';
import { hexToRGB } from '../../utils/testUtils.js'; 

// ============================================ Vars ============================================ //
let home;
let heading;
let subheading; 

// ============================================ Setup / teardown ================================ //
beforeEach(() => {
  render(<Home/>)
  home = document.querySelector('.home');
  heading = document.querySelector('.heading');
  subheading = document.querySelector('.subheading'); 
})

afterEach(() => {
  cleanup()
})

// ============================================ tests ========================================== //
describe('<Home/>', () => {
  describe('render', () => {
    it('should render', () => {
      expect(home).toBeTruthy()
    })
  })

  describe('content', () => {
    describe('.heading', () => {
      it('should say "Alex Sweeney"', () => {
        expect(heading.textContent).toEqual('Alex Sweeney')
      })
    })

    describe('.sub-heading', () => {
      it('should say "front end developer"', () => {
        expect(subheading.textContent).toEqual('front end developer')
      })
    })
  })

  describe('layout', () => {
    describe('home', () => {
      it(`should have style: {
        display: flex,
        flexDirection: column,
        justify-content: center,
        align-items: center,
        height: 100vh,
      }`, () => {
        expect(home.style.display).toEqual('flex')
        expect(home.style.flexDirection).toEqual('column')
        expect(home.style.justifyContent).toEqual('center')
        expect(home.style.alignItems).toEqual('center')
        expect(home.style.height).toEqual('100vh')
      })
    })
  })

  describe('style', () => {
    describe('.home', () => {
      it('should have background: styles.colors.background.darker', () => {
        const res = hexToRGB(colors.background.darker);

        expect(home.style.background).toEqual(res)
      })
    })

    describe('.heading', () => {
      it('should have color: styles.colors.font.dark', () => {
        const res = hexToRGB(colors.font.dark);

        expect(heading.style.color).toEqual(res)
      })

      it('should have fontFamily: styles.fonts.head', () => { 
        expect(heading.style.fontFamily).toEqual(fonts.head)
      })
    })

    describe('.sub-heading', () => {
      it('should have color: styles.colors.font.highlight', () => { 
        const res = hexToRGB(colors.font.highlight);

        expect(subheading.style.color).toEqual(res)
      })

      it('should have fontFamily: styles.fonts.body', () => { 
        expect(subheading.style.fontFamily).toEqual(fonts.body)
      })
    })
  })
})