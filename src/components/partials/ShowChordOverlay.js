import React from 'react'

const ShowChordOverlay = ({currentLyric, setShowOverlay}) => {
  return (
    <div className='show-chord-overlay' style={{background: currentLyric?.acf?.thumbnail_background_color}}>
        <button onClick={() => setShowOverlay(false)}>X</button>
        <div className="show-chord" dangerouslySetInnerHTML={{ __html: currentLyric?.content?.rendered }}></div>
    </div>
  )
}

export default ShowChordOverlay