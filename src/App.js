// App.js
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  const API_URL = 'https://itunes.apple.com/search?term=the%20grateful%20dead'

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(API_URL + search)
      const resData = await response.json()
      console.log(resData)
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }, [search])

  // App.js
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div>
      <Searchbar handleSearch={handleSearch} />
      {message}
      test 1
      <Gallery data={data} />
    </div>
  )

}


export default App