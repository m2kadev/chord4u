import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChordCard = ({post}) => {
  console.log(post)
  const navigate = useNavigate()

  const redirectSinglePost = (id) => {
        return navigate(`/${id}`)
  }

  return (
    <div className='chord-card-wrapper' onClick={() => redirectSinglePost(post?.id)}>
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