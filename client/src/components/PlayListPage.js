import React, { useEffect } from 'react'
import AnimeCard from './AnimeCard'
import { deleteAnimeFromList } from '../services/Playlist'
import { getPlaylist } from '../services/Playlist'

const PlayList = ({ playlist, fetchPlayList, user, setPlaylist }) => {
  const userId = user.id
  console.log(user)
  useEffect(() => {
    if (!playlist) {
      fetchPlayList()
    }
  }, [])

  const removeAnimeFromPlaylist = async (animeId) => {
    await deleteAnimeFromList(userId, animeId)
    setPlaylist(playlist.filter(anime => anime.animeId !== animeId))
  }

  return (
    <div className="playlist">
      {playlist &&
        playlist.map(
          (anime) =>
            anime && anime.title &&
            <div key={anime.id} className="playlistCard" >
              <AnimeCard {...anime} />
              <button className="removeButton" onClick={() => removeAnimeFromPlaylist(anime.animeId)}>remove</button>
            </div>
        )}
    </div>
  )
}

export default PlayList
