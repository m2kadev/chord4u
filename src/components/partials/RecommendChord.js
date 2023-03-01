import React from 'react'
import RenderChords from './RenderChords'

const RecommendChord = ({setShowOverlay, setCurrentLyric, data, title}) => {
  return (
    <div className='recommend-chord-wrapper'>
        <h3>{title}</h3>
        <RenderChords data={data} setShowOverlay={setShowOverlay} setCurrentLyric={setCurrentLyric} />
    </div>
  )
}

export default RecommendChord