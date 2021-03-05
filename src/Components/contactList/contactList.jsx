import React from "react";
import "./contactList.css"

const ContactList = ({id,avatar,firstName,lastName,email})=>{
    return(
        <div className="list-container">
                <div className="image">
                { avatar!==null ?
                    <img  src={`${avatar}`} alt={`${firstName}`}/>:
                    <h3>{firstName[0]}{lastName[0]}</h3>
                }
                </div>
                <div className="list-details">
                <h2>{firstName} {lastName}</h2>
                <p>{email}</p>
                </div>
        </div>
    )
}

export default ContactList;