import React from 'react';
import {Card,Button} from 'react-bootstrap';

const Contact = (props) => {
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
        <Card.Link href="#">Card Link</Card.Link>
        {' '}
        <Button variant="danger">Danger</Button>{' '}
      </Card.Body>
    </Card>    
        </div>
    );
}

export default Contact;

