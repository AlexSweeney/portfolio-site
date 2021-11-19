import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from './Home.jsx';

let header;
let subheading;
let background;

beforeEach(() => {
  render(<Home/>)
  header = document.querySelector('.header');
  subheading = document.querySelector('.sub-heaing');
  background = document.querySelector('.background');
})

afterEach(() => {
  cleanup()
})

describe('<Home/>', () => {
  describe('render', () => {
    it('should render', () => {
      expect(header).not.toEqual(null)
    })
  })

  describe('content', () => {
    describe('.heading', () => {
      it('should say "Alex Sweeney"', () => {
        expect(header.textContent).toEqual('Alex Sweeney')
      })
    })

    describe('.sub-heading', () => {
      it('should say "front end developer"', () => {
        expect(subheader.textContent).toEqual('front end developer')
      })
    })
  })

  describe('layout', () => {
    describe('background', () => {
      it(`should have style: {
        display: flex,
        justify-content: center,
        align-items: center,
      }`, () => {
        expect(background.style.display).toEqual('flex')
        expect(background.style.justifyContent).toEqual('center')
        expect(background.style.alignItems).toEqual('center')
      })
    })
  })

  describe('style', () => {
    describe('.background', () => {
      it('should have background: styles.colors.background.dark', () => {
        expect(background.style.background).toEqual(colors.background.dark)
      })
    })

    describe('.heading', () => {
      it('should have color: styles.colors.font.dark', () => {
        expect(heading.style.color).toEqual(colors.font.dark)
      })

      it('should have fontFamily: styles.fonts.head', () => {
        expect(heading.style.fontFamily).toEqual(fonts.head)
      })
    })

    describe('.sub-heading', () => {
      it('should have color: styles.colors.font.highlight', () => {
        expect(subheading.style.color).toEqual(fonts.highlight)
      })

      it('should have fontFamily: styles.fonts.body', () => {
        expect(subheading.style.fontFamily).toEqual(fonts.body)
      })
    })
  })
})