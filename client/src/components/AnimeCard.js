import React from 'react'

const AnimeCard = ({ id, title, popularity }) => {
  return (
    <div className='animeCard'>
      <h2>title: {title.userPerferred || title.english}</h2>
      <h2>popularity: {popularity}</h2>
    </div>
  )
}

export default AnimeCard