import React, { useState, useEffect } from 'react'
import { getEpisode } from '../resource'
import { useParams } from 'react-router-dom'

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState({})
  const { anime_id, episode_index } = useParams()
  const episodeIndex = parseInt(episode_index)

  useEffect(() => {
    getEpisode(setEpisode, anime_id, episodeIndex)
  }, [])

  return (
    <div className='episodeDetails'>
      <h2>{episode.title}</h2>
      <img src={episode.thumbnail} alt={episode.title} />
      <a target='_blank' href={episode.url}>{episode.title}</a>
      <a target='_blank' href={episode.site}>Official Site</a>
    </div>
  )
}

export default EpisodeDetails