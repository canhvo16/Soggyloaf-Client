import Client from "."

export const getPlaylist = async (id) => {
  try {
    const playList = await Client.get(`/watchlist/${id}`)
    return playList
  }
  catch (error) {
    throw error
  }
}

export const addToList = async (userId, animeRefId) => {
  try {
    console.log(userId)
    const playList = await Client.post(`/watchlist`, userId, animeRefId)
    return playList
  }
  catch (error) {
    throw error
  }
}