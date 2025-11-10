const PersonForm = (props) => {
    return (
        <>
            <form>
                <div> name: <input value={props.name} onChange={props.nameHandler} /></div>
                <div>number: <input value={props.num} onChange={props.numHandler} /></div>
                <div>
                    <button type="submit" onClick={props.addPerson}>add</button>
                </div>
            </form>
        </>
    )
}
export default PersonForm