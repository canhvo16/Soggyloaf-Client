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

  let animes = animeDetails.streamingEpisodes
    ? animeDetails.streamingEpisodes.map((episode, index) => (
      <EpisodeCard key={index} {...episode} />
    ))
    : null

  let title = animeDetails.title
    ? (title = animeDetails.title.english)
    : (title = 'Episodes')

  return (
    <div className="animeDetails">
      <h1>{title}</h1>
      {animes}
    </div>
  )
}

export default AnimeDetails
