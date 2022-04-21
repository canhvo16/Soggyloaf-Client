import Client from './index'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePassword = async (body) => {
  try {
    const res = await Client.put('/auth/update-password', body)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateName = async (body) => {
  try {
    const res = await Client.put('/auth/update-name', body)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DestroyAccount = async (id) => {
  try {
    const res = await Client.delete(`/auth/destroy/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUser = async (id) => {
  try {
    const res = await Client.get(`/auth/user/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
