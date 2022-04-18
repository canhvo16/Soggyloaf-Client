import React from 'react'
import { useNavigate } from 'react-router'

const AnimeCard = ({ id, title, popularity, coverImage }) => {
  const navigate = useNavigate()

  const showDetails = id => {
    navigate(`/${id}/animedetails`)
  }

  return (
    <div className="animeCard" onClick={() => showDetails(id)}>
      <h2>{title.userPerferred || title.english}</h2>
      <img src={coverImage.medium} alt={title.english} />
      <h2>Popularity Rating: {popularity}</h2>
    </div>
  )
}

export default AnimeCard
