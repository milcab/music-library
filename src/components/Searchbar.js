// Searchbar.js

import { useState } from 'react'

let [searchTerm, setSearchTerm] = useState('')

function Searchbar(props) {
    return (
        <form>
            <input type="text" placeholder="Enter a search term here" />
            <input type="submit" />
        </form>
    )
}

export default Searchbar