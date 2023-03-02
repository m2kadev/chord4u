import React from 'react'
import RenderChords from './RenderChords'

const RecommendChord = ({data, title}) => {
  return (
    <div className='recommend-chord-wrapper'>
        <h3>{title}</h3>
        <RenderChords data={data} />
    </div>
  )
}

export default RecommendChord