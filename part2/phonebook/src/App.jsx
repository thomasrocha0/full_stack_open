import { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        nameHandler={handleNewName}
        numHandler={handleNewNumber}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App