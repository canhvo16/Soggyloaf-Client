import axios from 'axios'

const getTopAnimes = async (callback) => {
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


const getEpisode = async (callback, id) => {
  const query = `
    query { 
      media(id: ${id}){
        streamingEpisodes {
          title
          thumbnail
          site
          url
        }
      }
    }`

  const res = await axios({
    url: 'https://graphql.anilist.co/',
    method: 'post',
    data: {
      query: query
    }
  })
  callback(res.data.data.streamingEpisodes)
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

export { getTopAnimes, searchAnimes, getEpisode }

