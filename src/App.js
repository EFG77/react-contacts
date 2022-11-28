import {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Contacts from './Components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsForm from './Components/ContactsForm';

class App extends Component{
  constructor(props){
    super(props)
  this.state={
    contacts:[
      { name: 'Mike',
      phoneNumber: 1345764247,  
      location: 'Oslo',
      id:'obfj88766',
    },

      { name: 'Alex',
      phoneNumber:  2345764247,   
      location: 'Accra',
      id: 'ksdlf9887',
    },

      { name: 'Mia',
      phoneNumber: 3345764247,
      location: 'Berlin',
      id: 'jdbe9374',
    },
      
      { name: 'Sarah',
      phoneNumber: 3342162137,
      location: 'Kumasi',
      id: 'diad8362',
    },

    
  ]
  }


  }; 

 handleAddContact=(newPerson)=> {
 newPerson.id= Math.random().toString()
  this.setState({
    contacts:[...this.state.contacts,newPerson]
  })

  };

  deleteContact= (id) =>{
    let unDeletedContacts=this.state.contacts.filter(person=>person.id!==id)
    this.setState({
      contacts: unDeletedContacts
    })



  }

  editContact= (id, replacementData) =>{
    
    this.setState({

      contacts:this.state.contacts.map(contact=>contact.id===id ? replacementData : contact)
    })
  }



  render(){
   return <div className="App">
    <Container>
    <Row>
    <Col><ContactsForm addContact={this.handleAddContact}/></Col>
    <Col>
     <Contacts people={this.state.contacts}deleteContact={this.deleteContact} editContact={this.editContact}/>
    </Col>
    </Row>
    </Container> 
          
          </div>;

  };
}

export default App;


