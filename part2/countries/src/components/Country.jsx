import Button from './Button'
import { useState } from 'react'
let idCounter = 0
const Country = ({ country }) => {
  
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show);
  }
  if (show) {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map(d =>
            <li key={idCounter++}>{d}</li>
          )}
        </ul>
        <img src={country.flags["png"]} alt={country.flags["alt"]}></img>
        <br></br>
        <Button show={show} onClick={toggleShow}/>
      </div>
    )
  } else {
    return (
      <p>{country.name.common} <Button show={show} onClick={toggleShow}/></p>
    )
  }
}
export default Country