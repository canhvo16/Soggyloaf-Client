import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'

const PlayList = ({ playlist, fetchPlayList }) => {
  useEffect(() => {
    if (!playlist) {
      fetchPlayList()
    }
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
