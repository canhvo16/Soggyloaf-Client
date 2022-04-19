import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { useRef } from 'react'
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

  let ref = useRef()
  let ref1 = useRef()
  let ref2 = useRef()
  let ref3 = useRef()

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

  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset
  }

  const scroll1 = scrollOffset => {
    ref1.current.scrollLeft += scrollOffset
  }

  const scroll2 = scrollOffset => {
    ref2.current.scrollLeft += scrollOffset
  }

  const scroll3 = scrollOffset => {
    ref3.current.scrollLeft += scrollOffset
  }

  return (
    <div className="scroll">
      <h1 className="carouselTitle"> Most Popular </h1>
      <section className="container">
        <div className="wrapper" ref={ref}>
          {topAnimes.map(anime => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
        <button onClick={() => scroll(-380)}>left</button>
        <button onClick={() => scroll(380)}>right</button>
      </section>

      <div>
        <h1 className="carouselTitle"> Recently Added To SoggyLoaf </h1>
        <section className="container">
          <div className="wrapper romance" ref={ref1}>
            {newAnimes.map(anime => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
          <button onClick={() => scroll1(-380)}>left</button>
          <button onClick={() => scroll1(380)}>right</button>
        </section>
      </div>

      <div>
        <h1 className="carouselTitle"> Romance </h1>
        <section className="container">
          <div className="wrapper" ref={ref2}>
            {romAnimes.map(anime => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
          <button onClick={() => scroll2(-380)}>left</button>
          <button onClick={() => scroll2(380)}>right</button>
        </section>
      </div>

      <div>
        <h1 className="carouselTitle"> Got Some Time? </h1>
        <section className="container">
          <div className="wrapper romance" ref={ref3}>
            {longAnimes.map(anime => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
          <button onClick={() => scroll3(-380)}>left</button>
          <button onClick={() => scroll3(380)}>right</button>
        </section>
      </div>
    </div>
  )
}

export default Home
