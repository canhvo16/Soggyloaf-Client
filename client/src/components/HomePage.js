import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { getLongAnime, getRomanceAnime, getTopAnimes } from '../resource'

const Home = () => {
  const [topAnimes, setTopAnimes] = useState([])
  const [romAnimes, setRomAnimes] = useState([])
  const [longAnimes, setLongAnimes] = useState([])

  useEffect(() => {
    getTopAnimes(setTopAnimes)
  }, [])

  useEffect(() => {
    getRomanceAnime(setRomAnimes)
  })

  useEffect(() => {
    getLongAnime(setLongAnimes)
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

      <div>
        <h1 className="carouselTitle"> Got Some Time? </h1>
        <section className="container">
          <div className="wrapper romance">
            {longAnimes.map(anime => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
