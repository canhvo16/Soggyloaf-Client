import axios from "axios"

export const getPlaylist = async (id) => {
  try {
    const playList = await axios.get(`/playlist/${id}`)
    return playList
  }
  catch (error) {
    throw error
  }
}
