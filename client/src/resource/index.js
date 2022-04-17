import axios from 'axios'

const base_url = ''

const getTopAnimes = async (callback) => {
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

export {
  getTopAnimes
}