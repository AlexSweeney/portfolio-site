import { render, cleanup } from '@testing-library/react';
import HomeBurgerMenu from './HomeBurgerMenu.jsx';
import { colors, fonts } from './../styles/styles.js';
import { hexToRGB } from '../utils/testUtils';

const linkNames = ['link-1', 'link-2', 'link-3'];
let homeBurgerMenu;
let links;


beforeEach(() => {
  render(<HomeBurgerMenu links={linkNames}/>)
  links = document.querySelector('.link');
  homeBurgerMenu = document.querySelector('.home-burger-menu');
})

afterEach(() => {
  cleanup()
})

describe('<HomeBurgerMenu/>', () => {
  describe('content', () => {
    it('should render text for each link in props.links', () => {
      links.forEach((link, i) => {
        expect(link.textContent).toEqual(linkNames[i])
      })
    })
  })

  describe('style', () => {
    describe('background', () => {
      it('.homeBurgerMenu should have background: styles.colors.background.lighter', () => {
        expect(homeBurgerMenu.style.background).toEqual(colors.background.lighter)
      })

      it(`.homeBurgerMenu should have style = {
        display: flex,
        flexDirection: column, 
      }`, () => {
        expect(homeBurgerMenu.style.display).toEqual('flex')
        expect(homeBurgerMenu.flexDirection).toEqual('column')
      })
    })

    describe('font', () => {
      it('.link should have fontFamily: styles.font.body', () => {
        links.forEach(link => {
          expect(link.style.fontFamily).toEqual(fonts.body)
        })
      })

      it('.link should have color: styles.colors.font.darker', () => {
        const res = hexToRGB(colors.font.darker);

        links.forEach(link => {
          expect(link.style.color).toEqual(res)
        })
      })
    })
  })
})
