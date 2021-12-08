import React from 'react'; 
import { colors, fonts } from '../styles/styles.js'; 
import Picture from '../components/Picture/Picture.jsx';
import ReactPianoImage from './imgs/react-piano.jpg';
import MetronomeImage from './imgs/metronome.jpg';

const reactPiano = <Picture image={ReactPianoImage} title="React Piano"/>;
const metronome = <Picture image={MetronomeImage} title="Metronome"/>;

export const data = {
  'React' : { 
    'hooks': [reactPiano, metronome, 'flex-quest', 'kairos-project', 'portfolio-site'],
    'functional components': [reactPiano, metronome, 'flex-quest', 'kairos-project', 'portfolio-site'],
    'react router': ['flex-quest', 'kairos-project', 'portfolio-site'], 
    'unit tests': [reactPiano, metronome, 'flex-quest', 'kairos-project', 'portfolio-site'],
  },
  'javascript' : { 
    'async / await': ['flex-quest', 'kairos-project'],
    'session storage': ['kairos-project'],
    'promises': ['flex-quest', 'kairos-project'], 
    'audio' : [reactPiano, metronome],
  },
  'design patterns' : { 
    'test driven development': ['portfolio-site'],
    'functional programming': [reactPiano, metronome, 'flex-quest', 'kairos-project', 'portfolio-site'], 
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
