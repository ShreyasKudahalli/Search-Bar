import './App.css'
import SearchBar from './components/SearchBar.jsx'
import SearchResultsList from './components/SearchResultsList.jsx'
import { useState } from 'react'

function App() {

  const [results, setResults] = useState([])

  return (
    <>
      <div className="App">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
      </div>
    </>
  )
}

export default App
