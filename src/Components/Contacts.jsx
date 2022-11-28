import React from 'react';
import Contact from'./Contact';

const Contacts = (props) => {
    let staff=props.people
    return (

        <div>
          {""}  
          {staff.map((item,id)=>{
                return(
                    <div key={item.id}>
                        <Contact person={item} deleteContact={props.deleteContact} editContact={props.editContact}/>{""}
                    </div>
                )
            })
          } 
        </div>
    );
}

export default Contacts;
