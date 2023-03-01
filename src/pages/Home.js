import React, {useState} from 'react'
import { useQuery } from 'react-query'
import { getPosts } from '../api/posts'
import RecommendChord from '../components/partials/RecommendChord'
import FullLoading from '../components/partials/FullLoading'
import ShowChordOverlay from '../components/partials/ShowChordOverlay'

const Home = () => {

  const { data, status } = useQuery('posts', getPosts)
  let [showOverlay, setShowOverlay] = useState(false)
  let [currentLyric, setCurrentLyric] = useState(null)

  let content

  if (status === 'loading') {
    content = <FullLoading />
  } else if (status === 'error') {
    console.log('Error...')
  } else {
    content = <RecommendChord setCurrentLyric={setCurrentLyric} setShowOverlay={setShowOverlay} data={data} status={status} title="# CHORD FOR YOU"  />
  }

  return (
    <div>
        {content}
        {showOverlay ? <ShowChordOverlay currentLyric={currentLyric} setShowOverlay={setShowOverlay} />: null}
    </div>
  )
}

export default Home