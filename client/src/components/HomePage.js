import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { getRomanceAnime, getTopAnimes } from '../resource'

const Home = () => {
  const [topAnimes, setTopAnimes] = useState([])
  const [romAnimes, setRomAnimes] = useState([])

  useEffect(() => {
    getTopAnimes(setTopAnimes)
  }, [])

  useEffect(() => {
    getRomanceAnime(setRomAnimes)
  })

  return (
    <div className="scroll">
      <h1 className="carouselTitle"> Most Popular </h1>
      <section className="container">
        <div className="wrapper">
          {topAnimes.map(anime => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </section>

      <div>
        <h1 className="carouselTitle"> Romance </h1>
        <section className="container">
          <div className="wrapper romance">
            {romAnimes.map(anime => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
