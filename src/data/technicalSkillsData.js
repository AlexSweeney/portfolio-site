import React from 'react'; 
import { colors, fonts } from '../styles/styles.js'; 
import Picture from '../components/Picture/Picture.jsx';
import ReactPianoImage from './imgs/react-piano.jpg';
import MetronomeImage from './imgs/metronome.jpg';
import FlexQuestImage from './imgs/flex-quest.jpg';
import KairosImage from './imgs/kairos.png';
import PortfolioSiteImage from './imgs/portfolio-site.jpg';

const reactPiano = <Picture image={ReactPianoImage} title="React Piano"/>;
const metronome = <Picture image={MetronomeImage} title="Metronome"/>;
const flexQuest = <Picture image={FlexQuestImage} title="Flex Quest"/>; 
const kairos = <Picture image={KairosImage} title="Kairos Project"/>;
const portfolioSite = <Picture image={PortfolioSiteImage} title="Portfolio Site"/>; 

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



// const imageBackgroundStyle = {
//   backgroundSize: '90%',
//   backgroundRepeat: 'no-repeat', 
//   backgroundPosition: 'center',
//   backgroundColor: 'white',
//   height: '200px',
//   width: '200px', 
//   opacity: '0.2',
//   borderRadius: '4%',
// };



// const reactPianoStyle = {
//   backgroundImage: `url(${ReactPianoImage})`,
//   ...imageBackgroundStyle,
// };

// const textContainerStyle = {
//   color: colors.font.light, 
//   opacity: '1',
//   position: 'absolute',
//   zIndex: '1',
//   textAlign: 'center',
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   height: '100%',
// }; 

// const pictureHeaderStyle = {
//   fontFamily: fonts.body,
// };

// const pictureLinkStyle = {
//   fontFamily: fonts.body,
// };

// const linkContainerStyle = {
//   display: 'flex',
//   justifyContent: 'space-around',
// };

// const reactPiano = (
//   <div style={{position: 'relative'}}>
//     <div style={textContainerStyle}>
//       <h3 style={pictureHeaderStyle}>React Piano</h3>

//       <div style={linkContainerStyle}>
//         <h4 style={pictureLinkStyle}>App</h4>
//         <h4 style={pictureLinkStyle}>Source</h4>
//       </div> 
//     </div> 
//     <div style={reactPianoStyle}></div>
//   </div>
// ); 
