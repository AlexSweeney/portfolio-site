import React, { useState, useEffect } from "react";
import OptionsBar from './../../components/OptionsBar/OptionsBar.jsx';
import PictureBar from '../../components/PictureBar/PictureBar.jsx';
import { colors, fonts } from '../../styles/styles.js';
// import { data } from './../../data/technicalSkillsData.js';

export default function TechnicalSkills({data}) {
  const desktopMatch = window.matchMedia('(min-width: 426px)').matches;

  // ========================================= data ========================================= // 
  const subjects = Object.keys(data);
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
    justifyContent: desktopMatch ? 'space-evenly' : 'center',
    alignItems: desktopMatch ? '' : 'center',
  };

  // ========================================= fns ========================================== // 
  function updateSelections(selectedSubject) {
    // topics
    const topics = getTopics(selectedSubject);
    setTopics(topics)
    setSelectedTopic(topics[0])

    // pictures
    const pictures = getPictures(selectedSubject, topics[0]);
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
    updateSelections(selectedSubject)
  }, [selectedSubject])

  // ========================================= output ======================================= // 
  return (
    <section className="technical-skills" style={technicalSkillsStyle}>
      <OptionsBar 
        className="subject" 
        options={subjects} 
        selectedOption={selectedSubject} 
        setSelectedOption={setSelectedSubject}
        style={subjectsBarStyle}/>
      <OptionsBar 
        className="topic"
        options={topics}
        selectedOption={selectedTopic}
        setSelectedOption={setSelectedTopic}
        style={topicsBarStyle}/>
      <PictureBar 
        className="picture-bar"
        pictures={pictures}
        selectedPicture={selectedPicture}
        setSelectedPicture={setSelectedPicture}
        style={pictureBarStyle}/>
    </section>
  )
}