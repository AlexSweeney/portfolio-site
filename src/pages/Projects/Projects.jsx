import React from "react";
import { colors } from "../../styles/styles";

export default function Projects({projs}) {
  const projectsStyle = {
    background: colors.background.darker,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  };

  return (
    <section className="projects" style={projectsStyle}>
      {projs}
    </section>
  )
}