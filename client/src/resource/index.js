import axios from 'axios'

const base_url = ''

const getTopAnimes = async callback => {
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
      Page(perPage: 1) {
        media(type: ANIME id: ${id}) {
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
}

export { getTopAnimes, getAnimeDetails }
