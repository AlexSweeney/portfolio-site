import React from "react";
import { render, cleanup } from '@testing-library/react';
import App from './App.jsx';

// ==================================== Consts & Vars ================================ //
let isDesktop;
let app;

// ==================================== Utils Fns ==================================== //
function renderDesktop() { 
	isDesktop = true;

  render(<App/>)
	getParts()
}

function renderPhone() { 
	isDesktop = false;

  render(<App/>)
	getParts()
}

function getParts() {
  app = document.querySelector('.app');
}

afterEach(() => {
  cleanup(<App/>)
})

describe('<App/>', () => {
  describe('desktop', () => {
    describe('on render', () => {
      describe('render', () => {
        it('should render', () => {
          renderDesktop() 

          expect(app).toBeTruthy()
        })
      })
    })
  
    describe('on click', () => {
  
    })
  })

  describe('phone', () => {
    describe('on render', () => {

    })

    describe('on touch', () => {

    })
  })
})