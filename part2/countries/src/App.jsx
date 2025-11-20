import { useState, useEffect} from 'react'
import Countries from './components/Countries'
import Search from './components/Search'
import countryServices from './services/countries'

function App() {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryServices.getAll()
    .then(response => {
      setCountries(response)
    })
  }, [])

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  }
  if (!countries) {
    return null
  }
  return (
    <>
      <Search search={search} onChange={handleSearchChange}/>
      <Countries data={countries} search={search} />
    </>
  )
}

export default App
