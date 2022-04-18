import React from 'react'


const EpisodeDetails = ({ title, thumbnail, url, site }) => {
  return (
    <div>
      <h2>title: {title}</h2>
      <img src={thumbnail} alt={title} />
      <a target='_blank' href={url}>{title}</a>
      <a target='_blank' href={site}>Official Site</a>
    </div>
  )
}

export default EpisodeDetails