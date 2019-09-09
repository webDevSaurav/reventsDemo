import React, {Component} from 'react';
import EventDashboard from '../../Features/events/EventsDashboard/EventDashboard';
import NavBar from '../../Features/navbar/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  
  render(){
    return (
      <React.Fragment>
        <NavBar></NavBar>
      <Container className="main">
        <EventDashboard></EventDashboard>
      </Container>
      </React.Fragment>
    );
  }
}

export default App;
