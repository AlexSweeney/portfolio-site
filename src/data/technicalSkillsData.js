import React from 'react'; 
import { colors, fonts } from '../styles/styles.js'; 
import Picture from '../components/Picture/Picture.jsx';
import ReactPianoImage from './imgs/react-piano.jpg';
import MetronomeImage from './imgs/metronome.jpg';
import FlexQuestImage from './imgs/flex-quest.jpg';
import KairosImage from './imgs/kairos.png';
import PortfolioSiteImage from './imgs/portfolio-site.jpg';

const reactPiano = <Picture 
  image={ReactPianoImage} 
  title="React Piano" 
  appAddress="https://alexsweeney.github.io/react-piano/" 
  sourceAddress="https://github.com/AlexSweeney/react-piano"/>;
const metronome = <Picture 
  image={MetronomeImage} 
  title="Metronome"
  appAddress="https://alexsweeney.github.io/metronome/"
  sourceAddress="https://github.com/AlexSweeney/metronome" />;
const flexQuest = <Picture 
  image={FlexQuestImage} 
  title="Flex Quest" 
  appAddress="https://alexsweeney.github.io/flex-quest/"
  sourceAddress="https://github.com/AlexSweeney/flex-quest"/>;
const kairos = <Picture 
  image={KairosImage} 
  title="Kairos Project"
  appAddress="https://github.com/AlexSweeney/kairos-project" 
  sourceAddress="https://github.com/AlexSweeney/kairos-project"/>;
const portfolioSite = <Picture 
  image={PortfolioSiteImage} 
  title="Portfolio Site"
  appAddress="https://github.com/AlexSweeney/portfolio-site" 
  sourceAddress="https://github.com/AlexSweeney/portfolio-site"/>;

export const data = {
  'React' : { 
    'hooks': [reactPiano, metronome, flexQuest, kairos, portfolioSite],
    'functional components': [reactPiano, metronome, flexQuest, kairos, portfolioSite],
    'react router': [flexQuest, kairos, portfolioSite], 
    'unit tests': [reactPiano, metronome, flexQuest, kairos, portfolioSite],
  },
  'javascript' : { 
    'async / await': [flexQuest, kairos],
    'session storage': [kairos],
    'promises': [flexQuest, kairos], 
    'audio' : [reactPiano, metronome],
  },
  'design patterns' : { 
    'test driven development': [portfolioSite],
    'functional programming': [reactPiano, metronome, flexQuest, kairos, portfolioSite], 
  },
}; 