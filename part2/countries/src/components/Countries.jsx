let idCounter = 0
const Countries = ({data, search}) => {
  const countries = data.filter(d => d.name.common.toLowerCase().includes(search.toLowerCase()))
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  if (countries.length == 1) {
    // convert to single entry
    const c = countries.map(d => d)[0]
    console.log(c);
    return (
      <>
        <h1>{c.name.common}</h1>
        <p>Capital {c.capital}</p>
        <p>Area {c.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(c.languages).map(d => 
            <li key={idCounter++}>{d}</li>
          )}
        </ul>
        <img src={c.flags["png"]} alt={c.flags["alt"]}></img>
      </>
    )
  }
  return (
    <>
      <ul>
        {countries.map(d => <li key={idCounter++}>{d.name.common}</li>)}
      </ul>
    </>
  )
}
export default Countries