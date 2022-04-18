import React from 'react'
import { useEffect, useState } from 'react'
import { getAnimeDetails } from '../resource'
import { useParams } from 'react-router'
import EpisodeCard from './EpisodeCard.jsx'

const AnimeDetails = () => {
  const { id } = useParams()
  const [animeDetails, setAnimeDetails] = useState({})

  useEffect(() => {
    getAnimeDetails(setAnimeDetails, id)
  }, [])
  console.log('here', animeDetails)

  let animes = animeDetails.streamingEpisodes
    ? animeDetails.streamingEpisodes.map((episode, index) => (
      <EpisodeCard key={index} {...episode} />
    ))
    : null

  return (
    <div className="animeDetails">
      <h1>anime</h1>
      {animes}
    </div>
  )
}

export default AnimeDetails
