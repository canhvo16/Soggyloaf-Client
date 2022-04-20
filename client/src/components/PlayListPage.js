import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getPlaylist } from '../services/Playlist'
import AnimeCard from './AnimeCard'
import { getAnimeDetails, getAnime } from '../resource'

const PlayList = ({ user }) => {
  const userId = user.id
  const [playlist, setPlaylist] = useState([])

  const fetchPlayList = async () => {
    const list = await getPlaylist(userId)
    const promises = list
      .filter(anime => anime.animeRefId)
      .map(anime => getAnime(anime.animeRefId))
    const animes = await Promise.all(promises)
    setPlaylist(animes)
  }

  useEffect(() => {
    fetchPlayList()
  }, [])

  return (
    <div className="playlist">
      {playlist &&
        playlist.map(
          (anime, index) =>
            anime && anime.title && <AnimeCard key={index} {...anime} />
        )}
    </div>
  )
}

export default PlayList
