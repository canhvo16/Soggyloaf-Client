import React, { useState, useEffect } from 'react'
import { getEpisode } from '../resource'
import { useParams } from 'react-router-dom'

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState()
  const { anime_id, episode_index } = useParams()

  useEffect(() => {
    getEpisode(setEpisode, anime_id)
  }, [])

  return (
    <div className='episodeDetails'>
      <h2>title: {episode[episode_index].title}</h2>
      <img src={episode[episode_index].thumbnail} alt={episode[episode_index].title} />
      <a target='_blank' href={episode[episode_index].url}>{episode[episode_index].title}</a>
      <a target='_blank' href={episode[episode_index].site}>Official Site</a>
    </div>
  )
}

export default EpisodeDetails