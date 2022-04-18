import React from 'react'
import { useState } from 'react'
import AnimeCard from './AnimeCard'
import { searchAnimes } from '../resource'

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const onChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    searchAnimes(setSearchResults, search)
  }

  let animes = searchResults
    ? searchResults.map((anime) => <AnimeCard key={anime.id} {...anime} />)
    : null

  return (
    <div>
      <h1>Discover Anime</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search Anime"
          onChange={onChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      {animes}
    </div>
  )
}

export default SearchPage
