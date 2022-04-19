import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import {
  getLongAnime,
  getNewAnime,
  getRomanceAnime,
  getTopAnimes
} from '../resource'

const Home = () => {
  const [topAnimes, setTopAnimes] = useState([])
  const [romAnimes, setRomAnimes] = useState([])
  const [longAnimes, setLongAnimes] = useState([])
  const [newAnimes, setNewAnimes] = useState([])

  useEffect(() => {
    getTopAnimes(setTopAnimes)
  }, [])

  useEffect(() => {
    getRomanceAnime(setRomAnimes)
  })

  useEffect(() => {
    getLongAnime(setLongAnimes)
  })

  useEffect(() => {
    getNewAnime(setNewAnimes)
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
        <h1 className="carouselTitle"> Recently Added To SoggyLoaf </h1>
        <section className="container">
          <div className="wrapper romance">
            {newAnimes.map(anime => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
        </section>
      </div>

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
