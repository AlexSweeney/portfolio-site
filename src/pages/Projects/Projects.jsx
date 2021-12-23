import React, { useEffect, useState } from "react";
import { colors, fonts } from "../../styles/styles";
import { getIsDesktop, triggerOnSizeChange } from "../../utils/utils";
import ReactPianoImg from './../../data/imgs/react-piano.jpg';
import MetronomeImg from './../../data/imgs/metronome.jpg';
import FlexQuestImg from './../../data/imgs/flex-quest.jpg'; 
import './Projects.css';

export default function Projects() {
  console.log('projects - add style')
  const desktopSize = '426px';
  const initialValue = getIsDesktop(desktopSize);
 
  const [isDesktop, setIsDesktop] = useState(initialValue); 

  const projectsStyle = {
    background: colors.background.darker,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: '1',
    padding: isDesktop ? '2em' : '1em', 
  };

  const projectStyle = {
    display: 'flex',
    position: 'relative',
    marginBottom: '9em',
    height: isDesktop ? '395px' : '230px',
    width: '100%',
    maxWidth: isDesktop ? '1400px' : '100%', 
  }; 

  const projectHeaderStyle = {
    fontSize: isDesktop ? '65px' : '46px',
    // whiteSpace: 'nowrap',
    textAlign: 'center',
    margin: '0',
    color: colors.font.light,
    fontFamily: fonts.head,
    display: 'flex',
    justifyContent: isDesktop ? '' : 'center',
    marginBottom: '30px',
    cursor: 'default',
  };

  const projectBodyStyle = {
    fontSize: isDesktop ? '29px' : '21px',
    color: colors.font.light,
    fontFamily: fonts.body,
    cursor: 'default',
  };

  const imageContainerStyle = (image, imageLeft, imageTop, backgroundPosition = 'left') => {
    return { 
      height: isDesktop ? '390px' : '100%',
      width: '645px',
      maxWidth: isDesktop ? '50%' : '100%',
      backgroundImage: `url(${image})`,
      backgroundSize: '50%',
      backgroundAttachment: isDesktop ? 'fixed' : 'initial',
      backgroundPosition: backgroundPosition,
      opacity: '0.15',
      backgroundRepeat: 'no-repeat',
      borderRadius: '1%',
      backgroundColor: 'white',
      position: 'absolute',
      left: isDesktop ? imageLeft : '0',
      top: isDesktop ? imageTop : '0',  
    };
  };

  const textContainerStyle = (textLeft, textTop) => {
    return {
      position: isDesktop ? 'absolute' : '', 
      display: isDesktop ? '' : 'flex',
      flexDirection: 'column',
      alignItems: isDesktop ? '' : 'center',
      left: textLeft,
      top: textTop, 
      maxWidth: '100%',
      width: isDesktop ? '' : '100%',
    };
  };

  function ProjectDisplay({title, link, image, text, textLeft, textTop, imageLeft, imageTop, backgroundPosition}) {
    return (
      <div className="project" style={projectStyle}>
        <a href={link} className="image-container" style={imageContainerStyle(image, imageLeft, imageTop, backgroundPosition)}> 
        </a>
        <div className="text-container" style={textContainerStyle(textLeft, textTop)}>
          <h3 style={projectHeaderStyle}>{title}</h3>
          <p style={projectBodyStyle}>{text}</p>
        </div>
      </div>
    )
  }

  function onSizeChange() { 
    setIsDesktop(getIsDesktop(desktopSize))
  }

  useEffect(() => {
    triggerOnSizeChange(onSizeChange)
  }, [])

  return (
    <section className="projects" style={projectsStyle}>
      <ProjectDisplay
        title="React Piano"
        image={ReactPianoImg}
        link="https://alexsweeney.github.io/react-piano/"
        text="App for learning piano keys and ear training."
        textLeft="42%"
        textTop="22%"
        imageLeft="4%"
        imageTop="8%"
      />

      <ProjectDisplay
        title="Metronome"
        image={MetronomeImg}
        link="https://alexsweeney.github.io/metronome/"
        text="Metronome with built in timer."
        textLeft="18%"
        textTop="11%"
        imageLeft="38%"
        imageTop="13%"
        backgroundPosition="center"
      />

      <ProjectDisplay
        title="Flex Quest"
        image={FlexQuestImg}
        link="https://alexsweeney.github.io/flex-quest/"
        text="Site for learning flex-box for css"
        textLeft="50%"
        textTop="50%"
        imageTop="9%"
        backgroundPosition="left bottom"
      />
    </section>
  )
} 