import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { useRef } from 'react'
import {
  getIsekais,
  getLongAnime,
  getNewAnime,
  getRomanceAnime,
  getTopAnimes,
  getAnime
} from '../resource'
import { getPlaylist } from '../services/Playlist'

const Home = ({ user }) => {
  const [topAnimes, setTopAnimes] = useState([])
  const [romAnimes, setRomAnimes] = useState([])
  const [longAnimes, setLongAnimes] = useState([])
  const [newAnimes, setNewAnimes] = useState([])
  const [isekai, setIsekai] = useState([])

  let ref = useRef()
  let ref1 = useRef()
  let ref2 = useRef()
  let ref3 = useRef()
  let ref4 = useRef()

  // useEffect(() => {
  //   fetchPlayList()
  // }, [])
  // console.log(user)
  // let userId = user.id

  // const [playlist, setPlaylist] = useState([])

  // const fetchPlayList = async () => {
  //   const list = await getPlaylist(userId)
  //   const promises = list
  //     .filter((anime) => anime.animeRefId)
  //     .map((anime) => getAnime(anime.animeRefId))
  //   const animes = await Promise.all(promises)
  //   setPlaylist(animes)
  // }

  useEffect(() => {
    getTopAnimes(setTopAnimes)
    getRomanceAnime(setRomAnimes)
    getLongAnime(setLongAnimes)
    getNewAnime(setNewAnimes)
    getIsekais(setIsekai)
  }, [])

  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset
  }

  const scroll1 = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset
  }

  const scroll2 = (scrollOffset) => {
    ref2.current.scrollLeft += scrollOffset
  }

  const scroll3 = (scrollOffset) => {
    ref3.current.scrollLeft += scrollOffset
  }

  const scroll4 = scrollOffset => {
    ref4.current.scrollLeft += scrollOffset
  }

  return (
    <div className="scroll">
      {/* <div>
        <h1 className="carouselTitle"> On Your Watch List </h1>
        <section className="container">
          <div className="wrapper">{watchlist}</div>
        </section>
        <button>Previous</button>
        <button>Next</button>
      </div> */}

      <h1 className="carouselTitle"> Most Popular </h1>
      <section className="container">
        <button id="carouselButtonLeft" onClick={() => scroll(-500)}></button>
        <div className="wrapper" ref={ref}>
          {topAnimes.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
        <button id="carouselButtonRight" onClick={() => scroll(500)}></button>
      </section>

      <div>
        <h1 className="carouselTitle"> Recently Added To SoggyLoaf </h1>
        <section className="container">
          <button
            id="carouselButtonLeft"
            onClick={() => scroll1(-500)}
          ></button>
          <div className="wrapper romance" ref={ref1}>
            {newAnimes.map((anime) => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
          <button
            id="carouselButtonRight"
            onClick={() => scroll1(500)}
          ></button>
        </section>
      </div>

      <div>
        <h1 className="carouselTitle"> Romance </h1>
        <section className="container">
          <button
            id="carouselButtonLeft"
            onClick={() => scroll2(-500)}
          ></button>
          <div className="wrapper" ref={ref2}>
            {romAnimes.map((anime) => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
          <button
            id="carouselButtonRight"
            onClick={() => scroll2(500)}
          ></button>
        </section>
      </div>

      <div>
        <h1 className="carouselTitle"> Got Some Time? </h1>
        <section className="container">
          <button
            id="carouselButtonLeft"
            onClick={() => scroll3(-500)}
          ></button>
          <div className="wrapper romance" ref={ref3}>
            {longAnimes.map((anime) => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
          <button
            id="carouselButtonRight"
            onClick={() => scroll3(500)}
          ></button>
        </section>
      </div>

      <div>
        <h1 className="carouselTitle"> This Isn't My World? </h1>
        <section className="container">
          <button
            id="carouselButtonLeft"
            onClick={() => scroll4(-500)}
          ></button>
          <div className="wrapper romance" ref={ref4}>
            {isekai.map(anime => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
          <button
            id="carouselButtonRight"
            onClick={() => scroll4(500)}
          ></button>
        </section>
      </div>
    </div>
  )
}

export default Home
