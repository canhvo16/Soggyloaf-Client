import Client from "."

export const getPlaylist = async (id) => {
  try {
    const playList = await Client.get(`/watchlist/${id}`).then(res => res.data[0].watch_list)
    return playList
  }
  catch (error) {
    throw error
  }
}

export const addToList = async (userId, animeRefId) => {
  try {
    const playList = await Client.post(`/watchlist`, { userId, animeRefId })
    return playList
  }
  catch (error) {
    throw error
  }
}

export const deleteAnimeFromList = async (userId, animeId) => {
  try {
    return Client.delete(`/watchlist/${userId}/${animeId}`)
  }
  catch (error) {
    throw error
  }
}