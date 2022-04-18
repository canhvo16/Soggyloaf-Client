import React from 'react'
import { useNavigate } from 'react-router-dom'

const EpisodeCard = ({ title, thumbnail, url }) => {
  const navigate = useNavigate()
  const onClick = () => {
    window.location.href = `${url}`;
  }
  
  return (
    <button className='episodeCard' onClick={onClick}>
      <h2>{title}</h2>
      <img src={thumbnail} alt={title} />
    </button>
  )
}

export default EpisodeCard