import React from 'react'
import { useNavigate } from 'react-router'

const AnimeCard = ({ id, title, popularity, coverImage }) => {
  const navigate = useNavigate()

  const showDetails = id => {
    navigate(`/anime/${id}`)
  }

  return (
    <div className='animeCard' onClick={() => showDetails(id)}>
      <div className='space'>
      <h2 className='animeTitle'>{title.userPerferred || title.english}</h2>
      </div>
      <img className='animeImg' src={coverImage.large} alt={title.english} />
    </div>
  )
}

export default AnimeCard