import api from '.apiConfig'

export const getSmoothies = async () => {
  try {
      const response = await api.get('/smoothies')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getSmoothie = async id => {
  try {
      const response = await api.get(`/smoothies/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createSmoothie = async smoothie => {
  try {
      const response = await api.post('/smoothies', product)
      return response.data
  } catch (error) {
      throw (error)
  }
}

export const updateSmoothie = async (id, smoothie) => {
  try {
      const response = await api.put(`/smoothies/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteSmoothie = async id => {
  try {
      const response = await api.delete(`/smoothies/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}