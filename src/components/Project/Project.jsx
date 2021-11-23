import React from 'react';
import { fonts, colors } from './../../styles/styles.js';

export default function Project({ picture, textStyle, picStyle, children}) {
  const headerContainerStyle = {
    fontFamily: fonts.head,
    color: colors.font.light,
  }; 

  const textContainerStyle = {
    position: 'absolute',
    left: textStyle.left,
    top: textStyle.top,
    fontFamily: fonts.body,
    color: colors.font.light,
  }; 

  const picContainerStyle = {
    position: 'absolute',
    left: picStyle.left,
    top: picStyle.top,
  };

  const header = children.props.children.filter(obj => obj.props.className.includes('project-header'));
  const text = children.props.children.filter(obj => obj.props.className.includes('project-text'));

  return (
    <section className="project">
      <div className="text-container" style={textContainerStyle}>
        <div className="header-container" style={headerContainerStyle}>
          {header}
        </div>
        {text}
      </div>

      <div className="picture-container" style={picContainerStyle}>
        {picture}
      </div>
    </section>
  )
}