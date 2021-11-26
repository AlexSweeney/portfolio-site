import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BurgerMenu from './BurgerMenu.jsx';
import { colors, fonts } from '../../styles/styles.js';
import { hexToRGB } from '../../utils/testUtils';

const linkNames = ['link-1', 'link-2', 'link-3'];
let burgerMenu;
let links;


beforeEach(() => {
  render(<BurgerMenu links={linkNames}/>)
  
  burgerMenu = document.querySelector('.burger-menu');
  links = document.querySelectorAll('.burger-menu-link');
})

afterEach(() => {
  cleanup()
})

describe('<BurgerMenu/>', () => {
  describe('render', () => {
    it('should render', () => {
      expect(burgerMenu).toBeTruthy()
    })
  })

  describe('content', () => {
    it('should render text for each link in props.links', () => {
      expect(links.length).toEqual(linkNames.length)

      links.forEach((link, i) => {
        expect(link.textContent).toEqual(linkNames[i])
      })
    })
  })

  describe('style', () => {
    describe('background', () => {
      it('.burgerMenu should have background: styles.colors.background.lighter', () => {
        const res = hexToRGB(colors.background.lighter);

        expect(burgerMenu.style.background).toEqual(res)
      })

      it(`.burgerMenu should have style = {
        display: flex,
        flexDirection: column,  
        height: 100vh,
      }`, () => {
        expect(burgerMenu.style.display).toEqual('flex')
        expect(burgerMenu.style.flexDirection).toEqual('column') 
        expect(burgerMenu.style.height).toEqual('100vh')
      })
    })

    describe('font', () => {
      it('.burger-menu-link should have fontFamily: styles.fonts.body', () => {
        links.forEach(link => {
          expect(link.style.fontFamily).toEqual(fonts.body)
        })
      })

      it('.burger-menu-link should have color: styles.colors.font.darker', () => {
        const res = hexToRGB(colors.font.darker);

        links.forEach(link => {
          expect(link.style.color).toEqual(res)
        })
      })

      it('.burger-menu-link should have fontSize: 36px', () => {
        links.forEach(link => {
          expect(link.style.fontSize).toEqual('36px')
        })
      })
    })

    describe('.burger-menu-link', () => {
      it(`should have style = {
        display: 'flex',
        justifyContent: 'center',
        padding: '32px 0',
      }`, () => {
        links.forEach(link => {
          expect(link.style.display).toEqual('flex')
          expect(link.style.justifyContent).toEqual('center')
          expect(link.style.padding).toEqual('32px 0px')
        })
      })
    })
  })
})
