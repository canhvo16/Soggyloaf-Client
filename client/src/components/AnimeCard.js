import React from 'react'

const AnimeCard = ({ id, title, popularity, coverImage }) => {
  return (
    <div className='animeCard'>
      <h2>title: {title.userPerferred || title.english}</h2>
      <h2>popularity: {popularity}</h2>
      <img src={coverImage.medium} alt={title.english} />
    </div>
  )
}

export default AnimeCard