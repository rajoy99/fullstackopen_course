import react from "react";

const Person = (props) =>{

    return(
        <div>
            <li key={props.person.id}>{props.person.name}   Number:   {props.person.number}</li>
        </div>
    )
}

export default Person