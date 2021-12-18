import React, { useState, useEffect } from "react";
import OptionsBar from './../../components/OptionsBar/OptionsBar.jsx';
import PictureBar from '../../components/PictureBar/PictureBar.jsx';
import { colors, fonts } from '../../styles/styles.js'; 

export default function TechnicalSkills({data}) {
  const [desktopMatch, setDesktopMatch] = useState(getIsDesktop())

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
    flexGrow: '1',
  };

  const subjectsBarStyle = {
    width: desktopMatch ? '33.33%' : '100%',
    background: colors.background.highlight,
    fontFamily: fonts.head,
    color: colors.font.light,
    justifyContent: desktopMatch ? '' : 'center',
    alignItems: desktopMatch ? '' : 'center',
  };

  const topicsBarStyle = {
    width: desktopMatch ? '33.33%' : '100%',

    fontFamily: fonts.head,
    color: colors.font.light, 
    justifyContent: desktopMatch ? '' : 'center',
    alignItems: desktopMatch ? '' : 'center',
  };

  const pictureBarStyle = {
    width: desktopMatch ? '33.33%' : '100%',
    justifyContent: 'flex-start',
    alignItems: desktopMatch ? 'flex-end' : 'center',
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

  function onSizeChange() {
    setDesktopMatch(getIsDesktop())
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

  function triggerOnSizeChange(fn) {
    window.addEventListener('resize', fn);
  }

  function getIsDesktop() {
    return window.matchMedia('(min-width: 540px)').matches;
  }

  // ========================================= listen / trigger ============================== // 
  useEffect(() => {
    updateSubject(selectedSubject)
  }, [selectedSubject])

  useEffect(() => {
    updateTopic(selectedTopic)
  }, [selectedTopic])

  useEffect(() => {
    triggerOnSizeChange(onSizeChange)
  }, [])

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