import React from 'react'
import { useNavigate } from 'react-router'

const EpisodeCard = ({ id, title, thumbnail, episode }) => {
  // const navigate = useNavigate()
  // const onClick = () => {
  //   navigate(`/${id}episode/${episode}`)
  // }
  return (
    <button className='episodeCard'>
      <h2>{title}</h2>
      <img src={thumbnail} alt={title} />
    </button>
  )
}

export default EpisodeCard