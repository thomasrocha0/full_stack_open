import Person from "./Person"

const Persons = (props) => {
  return (
      <> 
      {props.persons
      .filter((person) => person.name.toLowerCase().includes(props.filter))
        .map((person) => 
          <Person 
            key={person.id} 
            person={person} 
            id={person.id} 
            onClick={() => props.handleDelete(person.name, person.id)}
          />)}
      </>
  )
}
export default Persons