// Julia Dwyer
// This screen allows verified users to edit Smoothie infor by changing any key pair value

import { useState, useEffect } from 'react'
import './SmoothieEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { Layout } from '../../components'
import { getSmoothie, updateSmoothie } from '../../services/smoothies'

const SmoothieEdit = (props) => {
  const [smoothie, setSmoothie] = useState(
    {
      title: '',
      price: '',
      description: '',
      ingredients: '',
      imageURL: '',
    }
  )

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchSmoothie = async () => {
      const smoothie = await getSmoothie(id)
      setSmoothie(smoothie)
    }
    fetchSmoothie()
  }, [id])

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setSmoothie({
      ...smoothie,
      [name]: value,
    })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const updated = await updateSmoothie(id, smoothie)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/smoothies/${id}`} />
  }

  return (
    <Layout user={props.user}>
      <div>
        <h2 className='edit-title'>Let's make it better!</h2>
        <div className='smoothie-edit'>
          <div className='image-container'>
              <img
              className='edit-smoothie-image'
              src={`../${smoothie.imageURL}`}
              alt={smoothie.title}
            />
          </div>
          <form className='edit-form' onSubmit={handleSubmit}>
            <label> Smoothie Title:
              <input
                className='input-name'
                placeholder='Smoothie title'
                value={smoothie.title}
                name='title'
                required
                autoFocus
                onChange={handleChange}
              />
            </label>
            <label> Price:
              <input
                className='input-price'
                placeholder='Price'
                value={smoothie.price}
                name='price'
                required
                onChange={handleChange}
              />
            </label>  
            <label> Description:
              <textarea
                className='textarea-description'
                rows={5}
                cols={78}
                placeholder='Description'
                value={smoothie.description}
                name='description'
                required
                onChange={handleChange}
              />
            </label>
            <label> Ingredients:
              <textarea
                className='textarea-ingredients'
                rows={5}
                cols={78}
                placeholder='Ingredients - separate with commas'
                value={smoothie.ingredients}
                name='ingredients'
                required
                onChange={handleChange}
              />
            </label>
            <label> URL:
              <input
                className='edit-input-image-link'
                placeholder='Image Link'
                value={smoothie.imageURL}
                name='imageURL'
                required
                onChange={handleChange}
              />
            </label>
            <button type='submit' className='save-button'>
              Update
            </button>
          </form>
        </div>
      </div>
    </Layout>

  )
}

export default SmoothieEdit