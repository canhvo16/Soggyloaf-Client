import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import WatchListSlideShow from './WatchListSlideShow'
import {
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

  useEffect(() => {
    fetchPlayList()
  }, [])
  console.log(user)
  let userId = user.id

  const [playlist, setPlaylist] = useState([])

  const fetchPlayList = async () => {
    const list = await getPlaylist(userId)
    const promises = list
      .filter((anime) => anime.animeRefId)
      .map((anime) => getAnime(anime.animeRefId))
    const animes = await Promise.all(promises)
    setPlaylist(animes)
  }

  useEffect(() => {
    getTopAnimes(setTopAnimes)
    getRomanceAnime(setRomAnimes)
    getLongAnime(setLongAnimes)
    getNewAnime(setNewAnimes)
  }, [])

  let watchlist = playlist
    ? playlist.map((anime) => <WatchListSlideShow key={anime.id} {...anime} />)
    : null

  return (
    <div className="scroll">
      <div>
        <h1 className="carouselTitle"> On Your Watch List </h1>
        <section className="container">
          <div className="wrapper">{watchlist}</div>
        </section>
        <button>Previous</button>
        <button>Next</button>
      </div>

      <h1 className="carouselTitle"> Most Popular </h1>
      <section className="container">
        <div className="wrapper">
          {topAnimes.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </section>

      <div>
        <h1 className="carouselTitle"> Recently Added To SoggyLoaf </h1>
        <section className="container">
          <div className="wrapper romance">
            {newAnimes.map((anime) => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
        </section>
      </div>

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

      <div>
        <h1 className="carouselTitle"> Got Some Time? </h1>
        <section className="container">
          <div className="wrapper romance">
            {longAnimes.map((anime) => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
