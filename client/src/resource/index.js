import axios from 'axios'

const getTopAnimes = async callback => {
  const query = `
    query { 
      Page(perPage: 100) {
        media(type: ANIME, popularity_greater: 300000, sort: POPULARITY_DESC) {
          id
          title {
            english,
            userPreferred
          }
          popularity
          coverImage {
            medium
          }
        }
      }
    }
  `
  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.Page.media)
}

const searchAnimes = async (callback, search) => {
  const query = `
    query {
    Page(perPage: 20) {
      media(type: ANIME, sort: POPULARITY_DESC, search: "${search}") {
        id
          title {
          english,
            userPreferred
        }
        popularity
          coverImage {
          medium
        }
      }
    }
  }
  `
  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.Page.media)
}

const getAnimeDetails = async (callback, id) => {
  const query = `
  query {
    Media(id: ${id} ){
      title {
        english,
        userPreferred
      }
      coverImage {
        medium
      }
      streamingEpisodes {
        title,
        thumbnail,
        url
      }
    }
  }
  `
  await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  }).then(res => {
    callback(res.data.data.Media)
  })
}

const getRomanceAnime = async callback => {
  const query = `
    query { 
      Page(perPage: 100) {
        media(genre_in: "Romance" sort: POPULARITY_DESC) {
          id
          title {
            english,
            userPreferred
          }
          coverImage {
            medium
          }
        }
      }
    }
  `
  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.Page.media)
  console.log(res.data.data)
}

export { getTopAnimes, searchAnimes, getAnimeDetails, getRomanceAnime }
