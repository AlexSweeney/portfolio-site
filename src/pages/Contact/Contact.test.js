import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { fonts, colors } from './../../styles/styles.js';
import Contact from './Contact.jsx';
import { hexToRGB } from '../../utils/testUtils.js'; 

// ============================================ Vars ============================================ //
let home;
let heading;
let subheading; 
let githubLink;
let linkedinLink;
let links; 

// ============================================ Setup / teardown ================================ //
beforeEach(() => {
  render(<Contact/>)
  home = document.querySelector('.home');
  heading = document.querySelector('.heading');
  subheading = document.querySelector('.subheading'); 
  links = document.querySelectorAll('.link');
  githubLink = document.querySelector('.github-link');
  linkedinLink = document.querySelector('.linkedin-link');
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
      describe('github link', () => {
        it('should render', () => {
          expect(githubLink).not.toEqual(null)
        })

        it('should show github logo', () => {
          const image = githubLink.querySelector('.github-icon');

          expect(image).not.toEqual(null) 
          expect(image.src).toEqual('http://localhost/GitHub-Mark-64px.png')
        })

        it('should link to "https://github.com/alexsweeney"', () => { 
          expect(githubLink.href).toEqual('https://github.com/alexsweeney')
        })
      }) 

      describe('linkedin link', () => {
        it('should render', () => {
          expect(linkedinLink).not.toEqual(null)
        })

        it('should show linkedin logo', () => {
          const image = linkedinLink.querySelector('.linkedin-icon');

          expect(image).not.toEqual(null)  
          expect(image.src).toEqual('http://localhost/In-White-14@2x.png')
        })

        it('should link to "https://www.linkedin.com/in/alex-sweeney-b259721a/#"', () => { 
          expect(linkedinLink.href).toEqual('https://www.linkedin.com/in/alex-sweeney-b259721a/#')
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
      it(`should have  style = {
        margin: 0px 16px,
        width: 172px,
        height: 155px,
      }`, () => {
        links.forEach(link => {
          expect(link.style.margin).toEqual('0px 16px')
          expect(link.style.width).toEqual('172px')
          expect(link.style.height).toEqual('155px')
        })
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
  