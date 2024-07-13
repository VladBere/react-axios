import { useEffect, useState } from 'react'
import axios from 'axios'

export const UseAxios = (url) => {
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoaded, setIsLoaded] = useState(false) 
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(url)
            setProducts(res.data)
        } catch {
            setErrorMessage(error.message)
        } finally {
            setIsLoaded(true)
        }
    }

    fetchData();
  }, [])  

  return {products, errorMessage, isLoaded}
}
