import React from 'react'

const AnimeDetails = ({ id, title, popularity }) => {
  return (
    <div>
      <h2>title: {title}</h2>
      <h2>popularity: {popularity}</h2>
    </div>
  )
}

export default AnimeDetails