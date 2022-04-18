import React from 'react'
import { useState } from 'react'

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState()

  return (
    <div className='episodeDetails'>
      <h2>title: {episode.title}</h2>
      <img src={episode.thumbnail} alt={episode.title} />
      <a target='_blank' href={episode.url}>{episode.title}</a>
      <a target='_blank' href={episode.site}>Official Site</a>
    </div>
  )
}

export default EpisodeDetails