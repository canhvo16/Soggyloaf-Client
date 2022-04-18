import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { getTopAnimes } from '../resource'

const Home = () => {
  const [topAnimes, setTopAnimes] = useState([])

  useEffect(() => {
    getTopAnimes(setTopAnimes)
  }, [])

  return (
    <section className="container">
      <div className="wrapper">
        <h1>Anime List</h1>
        {topAnimes.map(anime => (
          <AnimeCard key={anime.id} {...anime} />
        ))}
      </div>
    </section>
  )
}

export default Home
