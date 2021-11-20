import React from "react";
import { colors, fonts } from "../../styles/styles";

export default function SubjectBar({ subjects, setSelectedSubject }) {
  const subjectBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    background: colors.background.highlight,
    opacity: '0.9',
    height: '100vh',
  };

  const subjectStyle = {
    fontFamily: fonts.head,
    padding: '32px',
    color: colors.font.light,
    textDecoration: 'none',
  };

  function onClickSubject(subject) {
    setSelectedSubject(subject)
  }

  return (
    <section className="subject-bar" style={subjectBarStyle}>
      {
        subjects.map((subject, i) => {
          return <a href="" 
            key={`subject-${i}`} 
            className="subject" 
            style={subjectStyle} 
            onClick={() => { onClickSubject(subject) }}>{subject}</a>
        })
      }
    </section>
  )
}