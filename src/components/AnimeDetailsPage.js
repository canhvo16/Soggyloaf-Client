import React from 'react'
import { useEffect, useState } from 'react'
import { getAnimeDetails } from '../resource'
import { useNavigate, useParams } from 'react-router-dom'
import EpisodeCard from './EpisodeCard.jsx'
import { addToList } from '../services/Playlist'

const AnimeDetails = ({ user }) => {
  const { id } = useParams()
  const [animeDetails, setAnimeDetails] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getAnimeDetails(setAnimeDetails, id)
  }, [])

  let episodes = animeDetails.streamingEpisodes
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

  const onClick = async () => {
    await addToList(user.id, id)
    window.location.reload()
  }

  return (
    <div>
      <div className="card1">
        <div className="cardLeft">
          <img src={coverImage} alt={title} className="cardImage" width="450" />
        </div>
        <div className="cardRight">
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
        <div className="animeDetails">{episodes}</div>
      </div>
    </div>
  )
}

export default AnimeDetails
