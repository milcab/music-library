// App.js
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  return (
    <div>
      <Searchbar />
      {message}
      <Gallery />
    </div>
  )
}

export default App