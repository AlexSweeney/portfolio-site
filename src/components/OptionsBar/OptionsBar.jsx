import React, { useState } from "react"; 
import { colors, fonts } from "../../styles/styles";

export default function OptionsBar({ 
  options, 
  selectedOption,
  handleClick,
  className, 
  style 
}) {  
  // ====================================================== Consts ======================================================== //
  const desktopMatch = window.matchMedia('(min-width: 426px)').matches;
  const [showAll, setShowAll] = useState(false); 

  // ====================================================== Styles ======================================================== //
  const optionsBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: desktopMatch ? '100%' : '',
    ...style,
  };

  const optionStyle = {
    fontFamily: fonts.head,
    padding: '32px',
    color: colors.font.light,
    textDecoration: 'none',
  };

  // ====================================================== Fns ========================================================= //
  function onSelectOption(option) {
    handleClick(option)
    setShowAll(oldVal => !oldVal)
  }

  function getSelectedClass(option) {
    if(option === selectedOption) {
      return `selected-${className}`;
    } else {
      return '';
    }
  } 

  // ====================================================== Options ===================================================== //
  return (
    <section className={`${className}-bar`} style={optionsBarStyle}>
      {
        options.map((option, i) => { 
          if((option === selectedOption) || showAll || desktopMatch) {
            return <h3
            key={`option-${i}`} 
            className={`${className} ${getSelectedClass(option)}`}
            style={optionStyle} 
            onClick={() => { onSelectOption(option) }}
            onTouchStart={() => { onSelectOption(option) }}
            >{option}</h3>
          }
        })
      }
    </section>
  )
}