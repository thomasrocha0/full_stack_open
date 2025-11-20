const Person = ({person, id, onClick}) => {
  return (
    <>
      <p>{person.name} {person.number} <button onClick={onClick}>Delete</button> </p>
    </>
  )
}

export default Person