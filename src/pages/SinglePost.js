import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getPost } from '../api/posts'

const SinglePost = () => {
  let { id } = useParams()
  let { data, status } = useQuery(['single-post', id], getPost)

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

        <h3>Title - {data?.title?.rendered}</h3>

        <div dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}>

        </div>
    </div>
  )
}

export default SinglePost