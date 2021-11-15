import Smoothie from '../models/smoothie.js'

export const getSmoothies = async (req, res) => {
  try {
    const smoothies = await Smoothie.find()
    res.json(smoothies)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getSmoothie = async (req, res) => {
  try {
    const { id } = req.params
    const smoothie = await Smoothie.findById(id)
    if (smoothie) {
      return res.json(smoothie)
    }
    res.status(404).json({ message: 'Smoothie not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createSmoothie = async (req, res) => {
  try {
    const smoothie = new Smoothie(req.body)
    await smoothie.save()
    res.status(201).json(smoothie)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateSmoothie = async (req, res) => {
  const { id } = req.params
  const smoothie = await Smoothie.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(smoothie)
}

export const deleteSmoothie = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Smoothie.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Smoothie deleted')
    }
    throw new Error('Smoothie not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
