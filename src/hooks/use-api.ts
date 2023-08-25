import { useEffect, useState } from 'react'

type Endpoint =
  | 'people'
  | 'planets'
  | 'starships'
  | 'films'
  | 'species'
  | 'vehicles'

const useApi = (endpoint: Endpoint) => {
  const baseUrl = 'https://swapi.dev/api/'

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any[]>([])

  const fetchPage = async (endpoint: Endpoint) => {
    setLoading(true)
    const response = await fetch(baseUrl + endpoint)
    const data = await response.json()
    setData(data.results)
    setLoading(false)
  }

  useEffect(() => {
    fetchPage(endpoint)
  }, [])

  return { fetchPage, loading, data }
}

export default useApi
