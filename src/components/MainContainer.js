import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import SecondaryContainer from './SecondaryContainer'

const MainContainer = () => {

    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
    if (movies===null) return
    const mainmovie=movies[1]
    //console.log(mainmovie)

    const {original_title,overview,id}=mainmovie
  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview}/>
      <VideoBackground id={id}/>
      
    </div>
  )
}

export default MainContainer
