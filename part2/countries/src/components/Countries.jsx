import Country from './Country'
const Countries = ({data, search}) => {
  const countries = data.filter(d => d.name.common.toLowerCase().includes(search.toLowerCase()))
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  return (
    <>
      <ul>
        {countries.map(d => <Country key={d.name.common} country={d}/>)}
      </ul>
    </>
  )
}
export default Countries