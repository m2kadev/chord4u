import React from 'react'
import { useQuery } from 'react-query'
import { getPosts } from '../api/posts'
import RecommendChord from '../components/partials/RecommendChord'
import FullLoading from '../components/partials/FullLoading'
import ButtonGroup from '../components/partials/ButtonGroup'
import { getCategories } from '../api/categories'
//import ShowChordOverlay from '../components/partials/ShowChordOverlay'

const Home = () => {

  const { data, status } = useQuery('posts', getPosts)

  const { data:categories, isError, isLoading, error} = useQuery('caegories', getCategories)
  //let [showOverlay, setShowOverlay] = useState(false)
  //let [currentLyric, setCurrentLyric] = useState(null)

  let content

  if (status === 'loading') {
    content = <FullLoading />
  } else if (status === 'error') {
    console.log('Error...')
  } else {
    content = <RecommendChord data={data} status={status} title="# CHORD FOR YOU"  />
  }

  if (isLoading) {
    console.log('loading categories')
  } else if (isError) {
    console.log(error)
  } else {
    //console.log(categories)
  }

  return (
    <div>
        <div className='category-btn-group-wrapper'>
          <ButtonGroup categories={categories} />
        </div>
        {content}
        {/* {showOverlay ? <ShowChordOverlay currentLyric={currentLyric} setShowOverlay={setShowOverlay} />: null} */}
    </div>
  )
}

export default Home