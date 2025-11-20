import { useEffect, useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Notification from "./components/Notification"
import personServices from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  const [message, setNewMessage] = useState(null)
  const [state, setNewState] = useState("success");

  useEffect(() => {
    personServices
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (persons.map((person) => person.name).includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, 
        replace the old number with a new one?`)) {
        const id = persons.find(p => p.name === newName).id
        personServices
          .update(id, newPerson)
          .then(response => {
            const newPersons = persons.map((person) => person.name === response.name ? response : person)
            setPersons(newPersons)
            setNewName('')
            setNewNumber('')
            setNewState('success')
            setNewMessage(`Updated ${response.name}`)
            setTimeout(() => {
            setNewMessage(null)
          }, 5000)
          }).catch(error => {
            console.log('could not fetch user\'s data:', error)
            setNewState('error')
            setNewMessage(`Information of ${newName} has already been removed from server.`)
            setTimeout(() => {
              setNewMessage(null);
            }, 5000)
          })
      }
      else {
        return
      }
    } else {
      personServices
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
          setNewState('success')
          setNewMessage(`Added ${response.name}`)
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
        })
    }
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
  const deleteEntry = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personServices
        .remove(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
          console.log('deleted ' + name)
        })
        .catch(error => {
          console.log('could not delete ' + id);
        })
      console.log("Deleted", name);
    } else {
      console.log("Did not delete", name);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} state={state} />
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

      <Persons persons={persons} filter={filter} handleDelete={deleteEntry} />
    </div>
  )
}

export default App