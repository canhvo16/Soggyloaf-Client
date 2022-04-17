import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import axios from 'axios'

const Home = () => {
  const [topAnimes, setTopAnimes] = useState([])

  const query = `
  query { 
    Page(perPage: 100) {
      media(type: ANIME, popularity_greater: 300000) {
        id
        title {
          english,
          userPreferred
        }
        popularity
      }
    }
  }`

  const getTopAnimes = async () => {
    const res = await axios({
      url: 'https://graphql.anilist.co/',
      method: 'post',
      data: {
        query: query
      }
    })
    setTopAnimes(res.data.data.Page.media)
  }

  useEffect(() => {
    getTopAnimes()
  }, [])

  return (
    <div>Home
      {topAnimes.map(anime => <AnimeCard key={anime.id} {...anime} />)}

    </div>
  )
}

export default Home