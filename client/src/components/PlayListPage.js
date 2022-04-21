import React, { useEffect } from 'react'
import AnimeCard from './AnimeCard'
import { deleteAnimeFromList } from '../services/Playlist'

const PlayList = ({ playlist, fetchPlayList, user, setPlaylist }) => {
  const userId = user.id
  useEffect(() => {
    if (!playlist) {
      fetchPlayList()
    }
  }, [])

  const removeAnimeFromPlaylist = async (animeId) => {
    await deleteAnimeFromList(userId, animeId)
    setPlaylist(playlist.filter((anime) => anime.animeId !== animeId))
  }

  return (
    <div className="playlist">
      <h1>On Your PlayList to Watch</h1>
      <div className="playlist-container">
        {playlist &&
          playlist.map(
            (anime) =>
              anime &&
              anime.title && (
                <div key={anime.id} className="playlistCard card1">
                  <div className="buttonRemove">
                    <button
                      className="removeButton"
                      onClick={() => removeAnimeFromPlaylist(anime.animeId)}
                    ></button>
                  </div>
                  <AnimeCard {...anime} className="animePlaylist" />
                </div>
              )
          )}
      </div>
    </div>
  )
}

export default PlayList
