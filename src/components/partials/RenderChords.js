import React from 'react'
import ChordCard from './ChordCard'

const RenderChords = ({data, setShowOverlay, setCurrentLyric}) => {
  return (
    <div className='chord-wrapper'>
        {data?.map((post, i) => (
            <ChordCard key={i} post={post} setShowOverlay={setShowOverlay} setCurrentLyric={setCurrentLyric}  />
        ))}
    </div>
  )
}

export default RenderChords