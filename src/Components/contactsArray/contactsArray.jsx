import React from "react"
import ContactList from '../contactList/contactList'

const ContactsArray = React.memo(({dataList,selectedContacts,selectIndividualContact})=>{
    dataList=dataList.sort((a,b)=>a.last_name.localeCompare(b.last_name))
    return(
        <div>
        {
             dataList.map(contact=>{
               return <ContactList
                 key={contact.id}
                 id={contact.id}
                 firstName={contact.first_name}
                 lastName={contact.last_name}
                 avatar={contact.avatar}
                 email={contact.email}
                 selectedContacts={selectedContacts}
                 selectIndividualContact={selectIndividualContact}
               />
             })

        }
      
        </div>
    )
})

export default ContactsArray;