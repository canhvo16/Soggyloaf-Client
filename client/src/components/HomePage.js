import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { getTopAnimes } from '../resource'

const Home = () => {
  const [topAnimes, setTopAnimes] = useState([])

  useEffect(() => {
    getTopAnimes(setTopAnimes)
  }, [])

  return (
    <div className='home'>
      <h1>Anime List</h1>
      {topAnimes.map(anime => <AnimeCard key={anime.id} {...anime} />)}
    </div>
  )
}

export default Home