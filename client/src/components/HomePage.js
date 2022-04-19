import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { getTopAnimes } from '../resource'

const Home = () => {
  const [topAnimes, setTopAnimes] = useState([])

  useEffect(() => {
    getTopAnimes(setTopAnimes)
  }, [])

  return (
    <div>
      <h1 className='carouselTitle'> Most Popular </h1>
      <section className="container">
        <div className="wrapper">
          {topAnimes.map(anime => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
