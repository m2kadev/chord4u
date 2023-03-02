import React from 'react'
import ChordCard from './ChordCard'

const RenderChords = ({data}) => {
  return (
    <div className='chord-wrapper'>
        {data?.map((post, i) => (
            <ChordCard key={i} post={post} />
        ))}
    </div>
  )
}

export default RenderChords