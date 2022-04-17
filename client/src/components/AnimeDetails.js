import React from 'react'
import { useEffect, useState } from 'react'

//anime details should get data from back end, not props
const AnimeDetails = () => {
  const [animeDetails, setAnimeDetails] = useState({})
  const { id, title, popularity } = animeDetails

  useEffect(() => {
    //axios get data from back end

    setAnimeDetails({})
  }, [])

  return (
    <div className='animeDetails'>
      <h2>title: {title}</h2>
      <h2>popularity: {popularity}</h2>
    </div>
  )
}

export default AnimeDetails