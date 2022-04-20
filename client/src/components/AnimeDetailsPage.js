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

  let description = animeDetails.description
    ? (description = animeDetails.description)
    : (description = 'description')

  let coverImage = animeDetails.coverImage
    ? (coverImage = animeDetails.coverImage.large)
    : (coverImage = 'image')

  const onClick = () => {
    addToList(user.id, id)
  }

  return (
    <div>
      <div className="card1">
        <div class="cardLeft">
          <img src={coverImage} alt={title} class="cardImage" width="450" />
        </div>
        <div class="cardRight">
          <h4 className="title1">{title}</h4>
          <p className="description1">{description}</p>
          <button
            className="addToWatchlist"
            onClick={onClick}
            disabled={user ? false : true}
          ></button>
        </div>
      </div>
      <div>
        <div className="animeDetails">{animes}</div>
      </div>
    </div>
  )
}

export default AnimeDetails
