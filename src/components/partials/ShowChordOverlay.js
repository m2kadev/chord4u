import React from 'react'

const ShowChordOverlay = ({currentLyric, setShowOverlay}) => {
  return (
    <div className='show-chord-overlay'>
        <button onClick={() => setShowOverlay(false)}>X</button>
        <div className="show-chord" dangerouslySetInnerHTML={{ __html: currentLyric?.content?.rendered }}></div>
    </div>
  )
}

export default ShowChordOverlay