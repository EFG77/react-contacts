import React, {useState} from 'react';
import { Card, Form,Button,  } from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const EditContactsForm = (props) => {
    const [name,setName]= useState(props.contact.name);
    const [phoneNumber,setphoneNumber]= useState(props.contact.phoneNumber);
    const [location,setlocation]= useState(props.contact.location);
    
     const handleSubmit= (e) =>{
        e.preventDefault();
    
    let newPerson= {
        name:name,
        phoneNumber:phoneNumber,
        location:location,
        id:uuidv4(),
    }
    
    props.editContact(props.contact.id,newPerson);
    
    setName('')
    setphoneNumber(0)
    setlocation('')

};

    return (
        <div>
          <Card>
          <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"value={name} onChange={(e)=>{setName(e.target.value);}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e)=>{setphoneNumber(e.target.value);}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e)=>{setlocation(e.target.value);}} />
      </Form.Group>
      <Button variant="primary" type="submit">  
        Submit
      </Button>
    </Form>
          </Card>  
          
        </div>
    );
}

export default EditContactsForm;

