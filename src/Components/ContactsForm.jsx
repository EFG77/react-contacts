import React, {useState} from 'react';
import { Card, Form,Button } from 'react-bootstrap';

const ContactsForm = (props) => {
    const [name,setName]= useState(' ');
    const [phoneNumber,setphoneNumber]= useState(0);
    const [location,setlocation]= useState(' ');

    const handleSubmit= (e) =>{
        e.preventDefault();
    
    let newPerson= {
        name:name,
        phoneNumber:phoneNumber,
        location:location,
    }

    props.addContact(newPerson);
    
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

export default ContactsForm;
