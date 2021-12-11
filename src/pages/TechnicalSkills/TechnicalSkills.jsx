import React, { useState, useEffect } from "react";
import OptionsBar from './../../components/OptionsBar/OptionsBar.jsx';
import PictureBar from '../../components/PictureBar/PictureBar.jsx';
import { colors, fonts } from '../../styles/styles.js'; 

export default function TechnicalSkills({data}) {
  const desktopMatch = window.matchMedia('(min-width: 426px)').matches;

  // ========================================= data ========================================= // 
  const [subjects, setSubjects] = useState(Object.keys(data));
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  const thisTopics = getTopics(selectedSubject);
  const [topics, setTopics] = useState(thisTopics);
  const [selectedTopic, setSelectedTopic] = useState(thisTopics[0]); 

  const thisPictures = getPictures(selectedSubject, thisTopics[0]);
  const [pictures, setPictures] = useState(thisPictures);
  const [selectedPicture, setSelectedPicture] = useState(thisPictures[0]); 

  // ========================================= styles ======================================= // 
  const technicalSkillsStyle = {
    display: 'flex',
    justifyContent:  desktopMatch ? 'space-between' : 'space-evenly',
    flexDirection: desktopMatch ? '' : 'column',
    background: colors.background.darker,
  };

  const subjectsBarStyle = {
    width: '33.33%',
    background: colors.background.highlight,
    opacity: '0.9',
    fontFamily: fonts.head,
    color: colors.font.light,
    justifyContent: desktopMatch ? '' : 'center',
    alignItems: desktopMatch ? '' : 'center',
  };

  const topicsBarStyle = {
    fontFamily: fonts.head,
    color: colors.font.light, 
    justifyContent: desktopMatch ? '' : 'center',
    alignItems: desktopMatch ? '' : 'center',
  };

  const pictureBarStyle = {
    justifyContent: desktopMatch ? 'flex-start' : 'center',
    alignItems: desktopMatch ? '' : 'center',
  };

  // ========================================= Event Handlers =============================== // 
  function onClickSubject(subject) { 
    setSelectedSubject(subject)
  }

  function onClickTopic(topic) {
    setSelectedTopic(topic)
  }

  function onClickPicture(picture) {
    setSelectedPicture(picture)
  }

  // ========================================= fns ========================================== // 
  function updateSubject(selectedSubject) {
    // topics
    const topics = getTopics(selectedSubject);
    setTopics(topics)
    setSelectedTopic(topics[0])

    // pictures
    const pictures = getPictures(selectedSubject, topics[0]);
    setPictures(pictures)
    setSelectedPicture(pictures[0])
  }

  function updateTopic(selectedTopic) {
    const pictures = getPictures(selectedSubject, selectedTopic);

    setPictures(pictures)
    setSelectedPicture(pictures[0])
  }

  function getTopics(selectedSubject) {
    return Object.keys(data[selectedSubject]);
  }

  function getPictures(selectedSubject, selectedTopic) { 
    return data[selectedSubject][selectedTopic];
  }

  // ========================================= listen / trigger ============================== // 
  useEffect(() => {
    updateSubject(selectedSubject)
  }, [selectedSubject])

  useEffect(() => {
    updateTopic(selectedTopic)
  }, [selectedTopic])

  // ========================================= output ======================================= // 
  return (
    <section className="technical-skills" style={technicalSkillsStyle}>
      <OptionsBar 
        className="subject" 
        options={subjects} 
        selectedOption={selectedSubject}
        handleClick={onClickSubject}  
        style={subjectsBarStyle}/>
      <OptionsBar 
        className="topic"
        options={topics}
        selectedOption={selectedTopic}
        handleClick={onClickTopic}
        style={topicsBarStyle}/>
      <PictureBar 
        className="picture-bar"
        pictures={pictures}
        selectedPicture={selectedPicture}
        handleClick={onClickPicture}
        style={pictureBarStyle}/>
    </section>
  )
}