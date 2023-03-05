import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getSinglePost } from '../api/posts'

const SinglePost = () => {
  let { id } = useParams()
  let { data, status } = useQuery(['single-post', id], getSinglePost)

  if (status === 'loading') {
    console.log('Loading....')
  } else if (status === 'error') {
    console.log('Something Wrong!')
  } else {
    console.log(data)
  }
   
  return (
    <div>
        <p>Chord For #{id}</p>

        {
          data?.map((chord, i) => (
            <div key={i}>
              <h3>Title - {chord?.title}</h3>

              <div dangerouslySetInnerHTML={{ __html: chord?.song }}>

              </div>
            </div>
          ))
        }
    </div>
  )
}

export default SinglePost