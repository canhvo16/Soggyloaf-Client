import React from 'react'
import { useState } from 'react'
import AnimeCard from './AnimeCard'
import { searchAnimes } from '../resource'

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const onChange = e => {
    setSearch(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    searchAnimes(setSearchResults, search)
  }

  let animes = searchResults
    ? searchResults.map(anime => <AnimeCard key={anime.id} {...anime} />)
    : null

  return (
    <div>
      <h1 className="searchtitle">Discover Anime</h1>
      <div className="searchcontainer">
        <form className="searchform" onSubmit={onSubmit}>
          <input
            className="searchinput"
            type="text"
            name="search"
            value={search}
            placeholder="Search Anime"
            onChange={onChange}
          ></input>
          <button className="searchbutton" type="submit"></button>
        </form>
        <div className="animesearchcontainer">{animes}</div>
      </div>
    </div>
  )
}

export default SearchPage
