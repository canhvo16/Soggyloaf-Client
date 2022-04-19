import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { getAnimeDetails, getRomanceAnime, getTopAnimes } from '../resource'

const Home = () => {
  const [topAnimes, setTopAnimes] = useState([])
  const [romAnimes, setRomAnimes] = useState([])

  const watchList = [16498, 113717, 1735, 269, 113415, 21459]
  const [slideshow, setSlideshow] = useState([])

  const addToSlideshow = () => {
    setSlideshow(...slideshow)
  }

  useEffect(() => {
    getTopAnimes(setTopAnimes)
  }, [])

  useEffect(() => {
    getRomanceAnime(setRomAnimes)
  })

  useEffect(() => {
    watchList.forEach((anime) => getAnimeDetails(setSlideshow, anime))
    console.log(slideshow)
  }, [])

  return (
    <div className="scroll">
      <h1 className="carouselTitle"> Most Popular </h1>
      <section className="container">
        <div className="wrapper">
          {topAnimes.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </section>

      <div>
        <h1 className="carouselTitle"> Romance </h1>
        <section className="container">
          <div className="wrapper romance">
            {romAnimes.map((anime) => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
