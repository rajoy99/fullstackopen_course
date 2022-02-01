
const Person = (props) =>{

    return(
        <div>
            <li className='note' key={props.person.id}>{props.person.name}   Number:   {props.person.number}</li>
            <button className='delete' type="button" value={props.person.id} onClick={props.deletePerson}>
                DELETE</button>
        </div>
    )
}

export default Person