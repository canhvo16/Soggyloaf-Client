import React from 'react'
import { useEffect, useState } from 'react'

//anime details should get data from back end, not props
const AnimeDetails = ({ id, title, popularity }) => {
  const [animeDetails, setAnimeDetails] = useState({})


  return (
    <div>
      <h2>title: {title}</h2>
      <h2>popularity: {popularity}</h2>
    </div>
  )
}

export default AnimeDetails