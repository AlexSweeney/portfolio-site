import React, { useState } from "react"; 

export default function PictureBar({ 
  pictures, 
  selectedPicture, 
  setSelectedPicture, 
  handleClick = () => {},
  style,
}) {
  // ==================================== Consts / Vars =============================== //
  const desktopMatch = window.matchMedia('(min-width: 426px)').matches;
  const [showAll, setShowAll] = useState(false); 

  // ==================================== Styles ====================================== //
  const pictureBarStyle = {
    display: 'flex',
    flexDirection: 'column', 
    height: '100%',
    marginTop: '16px',
    ...style,
  };

  // ==================================== Event Handlers ============================== //
  function onSelectPicture(picture) { 
    setShowAll(oldVal => !oldVal)
    handleClick(picture)
  }

  function getSelectedClass(picture) {
    return picture === selectedPicture ? 'selected-picture-container' : '';
  }

  // ==================================== Styles ====================================== //
  return (
    <section className="picture-bar" style={pictureBarStyle}>
      {
        pictures.map((picture, i) => {
          if(desktopMatch || picture === selectedPicture || showAll === true)  {
            return <div 
              className={`picture-container ${getSelectedClass(picture)}`} 
              key={`picture-container-${i}`}
              onTouchStart={() => onSelectPicture(picture)}
            >{picture}</div>
          } 
        })
      }
    </section>
  )
}