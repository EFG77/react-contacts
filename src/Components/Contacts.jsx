import React from 'react';
import Contact from'./Contact';

const Contacts = (props) => {
    let staff=props.people
    return (

        <div>
          {""}  
          {staff.map((item,index)=>{
                return(
                    <div key={index}>
                        <Contact person={item}/>{""}
                    </div>
                )
            })
          } 
        </div>
    );
}

export default Contacts;
