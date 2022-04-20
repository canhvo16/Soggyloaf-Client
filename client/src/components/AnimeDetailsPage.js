import React from 'react'
import { useEffect, useState } from 'react'
import { getAnimeDetails } from '../resource'
import { useParams } from 'react-router'
import EpisodeCard from './EpisodeCard.jsx'
import { addToList } from '../services/Playlist'

const AnimeDetails = ({ user }) => {
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

  const onClick = () => {
    addToList(user.id, id)
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClick} disabled={user ? false : true}>
        Add to List
      </button>
      {animes}
      <div>
        <h1 className="episodetitle">{title}</h1>
        <div className="animeDetails">{animes}</div>
      </div>
    </div>
  )
}

export default AnimeDetails
