import React from 'react'
import { IMAGE_URL } from '../utils/contants'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-4' >
      
      <img alt="image-url" src={IMAGE_URL+posterpath} />
    </div>
  )
}

export default MovieCard
