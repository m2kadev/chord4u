import React from 'react'
import { useQuery } from 'react-query'
import { getPosts } from '../api/posts'
import RecommendChord from '../components/partials/RecommendChord'
import FullLoading from '../components/partials/FullLoading'

const Home = () => {

  const { data, status } = useQuery('posts', getPosts)

  let content

  if (status === 'loading') {
    content = <FullLoading />
  } else if (status === 'error') {
    console.log('Error...')
  } else {
    content = <RecommendChord data={data} status={status} title="# CHORD FOR YOU"  />
  }

  return (
    <div>
        {content}
    </div>
  )
}

export default Home