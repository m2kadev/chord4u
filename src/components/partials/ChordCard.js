import React from 'react'

const ChordCard = ({post}) => {
  console.log(post)
  return (
    <div className='chord-card-wrapper'>
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