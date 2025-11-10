import Person from "./Person"
const Persons = (props) => {
    return (
        <> 
        {props.persons.filter((person) => person.name.toLowerCase().includes(props.filter))
            .map((person) => <Person key={person.name} person={person} />)}
        </>
    )
}
export default Persons