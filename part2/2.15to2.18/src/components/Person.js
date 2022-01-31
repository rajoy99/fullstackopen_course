import react from "react";

const Person = (props) =>{

    return(
        <div>
            {props.Person.map(val=>{<p>val.name</p>})}
        </div>
    )
}