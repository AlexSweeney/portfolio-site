import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { fonts, colors } from './../../styles/styles.js';
import Contact from './Contact.jsx';
import { hexToRGB } from '../../utils/testUtils.js'; 

// ============================================ Vars ============================================ //
let home;
let heading;
let subheading; 
let links;

let thisLinks = [<div className='link' key={'link-1'}>Link-1</div>, <div className='link' key={'link-1'}>Link-2</div>];

// ============================================ Setup / teardown ================================ //
beforeEach(() => {
  render(<Contact/>)
  home = document.querySelector('.home');
  heading = document.querySelector('.heading');
  subheading = document.querySelector('.subheading'); 
  links = document.querySelectorAll('.link');
})

afterEach(() => {
  cleanup()
})

// ============================================ tests ========================================== //
describe('<Home/>', () => {
  describe('render', () => {
    it('should render', () => {
      expect(home).not.toEqual(null)
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

    describe('.links', () => {
      it('should render all links', () => {
        expect(links.length).toEqual(thisLinks.length)

        links.forEach((link, i) => {
          expect(link.textContent).toEqual(thisLinks[i].children)
        })
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

    describe('.link', () => {
      it('should have margin = 0 16px', () => [
        links.forEach(link => {
          expect(link.style.margin).toEqual('0 16px')
        })
      ])
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