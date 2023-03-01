import React from 'react'

const ChordCard = ({post, setShowOverlay, setCurrentLyric}) => {
  console.log(post)
  const showLyric = (lyric) => {
    setShowOverlay(true)
    setCurrentLyric(lyric)
  }

  return (
    <div className='chord-card-wrapper' onClick={() => showLyric(post)}>
        <span className='chord-card-circle' style={{background: post?.acf?.thumbnail_background_color}}></span>
        <div className='chord-card'>
                <h3 style={{color: post?.acf?.font_color}}>{post?.title?.rendered}</h3>
                {/* <div dangerouslySetInnerHTML={{__html: post?.content?.rendered}} /> */}
                <p><span>Artist:</span> <span>{post?.acf?.artist}</span></p>
        </div>
    </div>
  )
}

export default ChordCard