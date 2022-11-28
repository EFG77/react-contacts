import React, {useState} from 'react';
import {Card,Button,Modal} from 'react-bootstrap';
import EditContactsForm from './EditContactsForm';

const Contact = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleDeleteContact= (e) => {
     e.preventDefault();
     
     props.deleteContact(props.person.id); 
  };


  let member=props.person; 
    return (
        <div>
        <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
           {member.name}
         </Card.Subtitle>
        <Card.Title>PhoneNumber</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
           {member.phoneNumber}
         </Card.Subtitle>
        <Card.Title>Location</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
           {member.location}
         </Card.Subtitle>
        <Button variant="danger" size="sm" onClick={handleShow}>Edit</Button>
        {' '}
        <Button variant="danger" size="sm" onClick={handleDeleteContact}>Delete</Button>{' '}
      </Card.Body>
    </Card>  

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EditForm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactsForm contact={props.person}editContact={props.editContact}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>





        </div>
    );
}

export default Contact;

