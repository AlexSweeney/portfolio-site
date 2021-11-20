import React, { useState } from "react"; 
import { colors, fonts } from "../../styles/styles";

export default function SubjectBar({ subjects, selectedSubject, setSelectedSubject }) {
  // ====================================================== Consts ======================================================== //
  const desktopMatch = window.matchMedia('(min-width: 426px)').matches;
  const [showAll, setShowAll] = useState(false);

  // ====================================================== Styles ======================================================== //
  const subjectBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    background: colors.background.highlight,
    opacity: '0.9',
    height: desktopMatch ? '100vh' : '',
  };

  const subjectStyle = {
    fontFamily: fonts.head,
    padding: '32px',
    color: colors.font.light,
    textDecoration: 'none',
  };

  function onSelectSubject(subject) {  
    setSelectedSubject(subject)
    setShowAll(oldVal => !oldVal)
  }

  return (
    <section className="subject-bar" style={subjectBarStyle}>
      {
        subjects.map((subject, i) => { 
          if((subject === selectedSubject) || showAll || desktopMatch) {
            return <a href="" 
            key={`subject-${i}`} 
            className="subject" 
            style={subjectStyle} 
            onClick={() => { onSelectSubject(subject) }}
            onTouchStart={() => { onSelectSubject(subject) }}>{subject}</a>
          }
        })
      }
    </section>
  )
}