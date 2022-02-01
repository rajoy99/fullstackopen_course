
const Person = (props) =>{

    return(
        <div>
            <li key={props.person.id}>{props.person.name}   Number:   {props.person.number}</li>
            <button type="button" value={props.person.id} onClick={deletePerson}>
                DELETE</button>
        </div>
    )
}

export default Person