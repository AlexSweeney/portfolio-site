import React from "react";
import { colors, fonts } from "../../styles/styles";
import ReactPianoImg from './../../data/imgs/react-piano.jpg';
import MetronomeImg from './../../data/imgs/metronome.jpg';
import FlexQuestImg from './../../data/imgs/flex-quest.jpg';

export default function Projects() {
  const projectStyle = {
    display: 'flex',
    position: 'relative',
    marginBottom: '5em',
    height: '395px',
  };

  const projectHeaderStyle = {
    fontSize: '70px',
    margin: '0',
    color: colors.font.light,
    fontFamily: fonts.head,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  };

  const projectBodyStyle = {
    fontSize: '29px',
    color: colors.font.light,
    fontFamily: fonts.body,
  };

  const projectsStyle = {
    background: colors.background.darker,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    padding: '2em',
  };

  const imageContainerStyle = (image, imageLeft, imageTop) => {
    return {
      height: '390px',
      width: '645px',
      backgroundImage: `url(${image})`,
      backgroundSize: '106%',
      opacity: '0.15',
      backgroundRepeat: 'no-repeat',
      borderRadius: '1%',
      backgroundColor: 'white',
      position: 'absolute',
      left: imageLeft,
      top: imageTop,
    };
  };

  const textContainerStyle = (textLeft, textTop) => {
    return {
      position: 'absolute', 
      left: textLeft,
      top: textTop,
    };
  };

  function ProjectDisplay({title, image, link, text, textLeft, textTop, imageLeft, imageTop}) {
    return (
      <div style={projectStyle}>
        <div style={imageContainerStyle(image, imageLeft, imageTop)}> 
        </div>
        <div style={textContainerStyle(textLeft, textTop)}>
          <h3 style={projectHeaderStyle}>{title}</h3>
          <a href={link} style={projectBodyStyle}>{link}</a>
          <p style={projectBodyStyle}>{text}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="projects" style={projectsStyle}>
      <ProjectDisplay
        title="React Piano"
        image={ReactPianoImg}
        link="http://github.io/react-piano"
        text="App for learning piano keys and ear training."
        textLeft="42%"
        textTop="22%"
        imageLeft="0"
      />

      <ProjectDisplay
        title="Metronome"
        image={MetronomeImg}
        link="https://alexsweeney.github.io/metronome/"
        text="Metronome with built in timer."
        textLeft="18%"
        textTop="11%"
        imageLeft="38%"
        imageTop="4%"
      />

      <ProjectDisplay
        title="Flex Quest"
        image={FlexQuestImg}
        link="https://alexsweeney.github.io/flex-quest/"
        text="Site for learning flex-box for css"
        textLeft="50%"
        imageTop="9%"
      />
    </section>
  )
} 
