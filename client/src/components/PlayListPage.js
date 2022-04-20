import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import { getAnime } from '../resource'
import { getPlaylist } from '../services/Playlist'

const PlayList = ({ user }) => {
  useEffect(() => {
    fetchPlayList()
  }, [])

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
