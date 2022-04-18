import React from 'react'
import { useEffect, useState } from 'react'
import { getAnimeDetails } from '../resource'
import { useParams } from 'react-router'
import EpisodeCard from './EpisodeCard'

//anime details should get data from back end, not props
const AnimeDetails = () => {
  const { id } = useParams()
  const [animeDetails, setAnimeDetails] = useState([])

  useEffect(() => {
    //axios get data from back end
    getAnimeDetails(setAnimeDetails, id)
  }, [])
  console.log(animeDetails.streamingEpisodes)

  let animes = animeDetails.streamingEpisodes
    ? animeDetails.streamingEpisodes.map((anime, index) => (
        <EpisodeCard key={index} {...anime} />
      ))
    : null

  return (
    <div className="animeDetails">
      <h1>Episodes</h1>
      {animes}
    </div>
  )
}

export default AnimeDetails
