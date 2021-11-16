import { useState, useEffect } from 'react'
import './Smoothies.css'

import { Layout, Smoothie, Search } from '../../components'
import { getSmoothies } from '../../services/smoothies'

const Smoothies = (props) => {
  const [smoothies, setSmoothies] = useState([])
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    const fetchSmoothies = async () => {
      const allSmoothies = await getSmoothies()
      setSmoothies(allSmoothies)
      setSearchResult(allSmoothies)
    }
    fetchSmoothies()
  }, [])

  const handleSearch = (event) => {
    const results = smoothies.filter((smoothie) =>
      smoothie.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
    setApplySort(true)
  }

  const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className='smoothies'>
        {searchResult.map((smoothie, index) => {
          return (
            <Smoothie />
          )
        })}
      </div>
    </Layout>
  )
}

export default Smoothies
