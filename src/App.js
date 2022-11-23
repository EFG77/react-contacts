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
    },

      { name: 'Alex',
      phoneNumber:  2345764247,   
      location: 'Accra',
    },

      { name: 'Mia',
      phoneNumber: 3345764247,
      location: 'Berlin',
    },
      
      { name: 'Sarah',
      phoneNumber: 3342162137,
      location: 'Kumasi',
    },

    
  ]
  }


  }; 

 handleAddContact=(newPerson)=> {

  this.setState({
    contacts:[...this.state.contacts,newPerson]
  })

  };



  render(){
   return <div className="App">
    <Container>
    <Row>
    <Col><ContactsForm addContact={this.handleAddContact}/></Col>
    <Col>
     <Contacts people={this.state.contacts}/>
    </Col>
    </Row>
    </Container> 
          
          </div>;

  };
}

export default App


