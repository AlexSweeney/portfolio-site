import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import BurgerMenu from './BurgerMenu.jsx';
import { colors, fonts } from '../../styles/styles.js';
import { hexToRGB } from '../../utils/testUtils';

// ============================================== Consts & Vars ============================================== //
const linkNames = ['link-1', 'link-2', 'link-3'];

let showBurgerMenu = true;
let burgerMenu;
let links;

let handleTouch = jest.fn();

// ============================================== Setup and teardown ========================================= //
function renderBurgerMenu() {
  render(
  <BrowserRouter>
    <BurgerMenu links={linkNames} show={showBurgerMenu} handleTouch={handleTouch}/>
  </BrowserRouter>)
  
  burgerMenu = document.querySelector('.burger-menu');
  links = document.querySelectorAll('.burger-menu-link');
} 

afterEach(() => {
  cleanup()
  showBurgerMenu = true;
  burgerMenu = null;
  links = null;

  handleTouch = jest.fn();
})

// ============================================== Tests ===================================================== //
describe('<BurgerMenu/>', () => {
  describe('on render', () => {
    describe('render', () => {
      it('should render if props.show === true', () => {
        renderBurgerMenu()
  
        expect(burgerMenu).toBeTruthy()
      })
  
      it('should not render if props.show === false', () => {
        showBurgerMenu = false;
        renderBurgerMenu()
  
        expect(burgerMenu).toBeFalsy()
      })
    })
  
    describe('content', () => {
      it('should render text for each link in props.links', () => {
        renderBurgerMenu()
  
        expect(links.length).toEqual(linkNames.length)
  
        links.forEach((link, i) => {
          expect(link.textContent).toEqual(linkNames[i])
        })
      })
    })
  
    describe('style', () => {
      describe('background', () => {
        it('.burgerMenu should have background: styles.colors.background.lighter', () => {
          renderBurgerMenu()
  
          const res = hexToRGB(colors.background.lighter);
  
          expect(burgerMenu.style.background).toEqual(res)
        })
  
        it(`.burgerMenu should have style = {
          display: flex,
          flexDirection: column,  
          height: 100vh,
        }`, () => {
          renderBurgerMenu()
  
          expect(burgerMenu.style.display).toEqual('flex')
          expect(burgerMenu.style.flexDirection).toEqual('column') 
          expect(burgerMenu.style.height).toEqual('100vh')
        })
      })
  
      describe('font', () => {
        it('.burger-menu-link should have fontFamily: styles.fonts.body', () => {
          renderBurgerMenu()
  
          links.forEach(link => {
            expect(link.style.fontFamily).toEqual(fonts.body)
          })
        })
  
        it('.burger-menu-link should have color: styles.colors.font.darker', () => {
          renderBurgerMenu()
  
          const res = hexToRGB(colors.font.darker);
  
          links.forEach(link => {
            expect(link.style.color).toEqual(res)
          })
        })
  
        it('.burger-menu-link should have fontSize: 36px', () => {
          renderBurgerMenu()
  
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
          renderBurgerMenu()
  
          links.forEach(link => {
            expect(link.style.display).toEqual('flex')
            expect(link.style.justifyContent).toEqual('center')
            expect(link.style.padding).toEqual('32px 0px')
          })
        })
      })
    })
  })
  
  describe('on touch', () => {
    it('should call props.handleTouch with touched link textContent', () => {
      renderBurgerMenu()

      links.forEach((link, i) => { 
        fireEvent.touchStart(link)

        expect(handleTouch).toHaveBeenCalledTimes(i + 1)
        expect(handleTouch).toHaveBeenCalledWith(linkNames[i]) 
      })
    })
  })
})
