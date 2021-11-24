import React from "react";
import { colors } from "../../styles/styles";

export default function Projects({projs}) {
  const projectsStyle = {
    background: colors.background.dark,
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <section className="projects" style={projectsStyle}>
      {projs}
    </section>
  )
}