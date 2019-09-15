import React, { Component } from "react";
import EventDashboard from "../../Features/events/EventsDashboard/EventDashboard";
import NavBar from "../../Features/navbar/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../Features/home/HomePage";
import EventDetailedPage from "../../Features/events/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../Features/user/peopleDashboard/PeopleDashboard";
import SettingDashboard from "../../Features/user/Settings/SettingDashboard";
import UserDetailedPage from "../../Features/user/UserDetailed/UserDetailedPage";
import EventForm from "../../Features/events/EventForm/EventForm";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={HomePage}></Route>
        <Route
          exact
          path='/(.+)'
          render={() => (
            <React.Fragment>
              <NavBar></NavBar>
              <Container className='main'>
                <Route path='/events' component={EventDashboard}></Route>
                <Route path='/events/:id' component={EventDetailedPage}></Route>
                <Route path='/people' component={PeopleDashboard}></Route>
                <Route path='/profile/:id' component={UserDetailedPage}></Route>
                <Route path='/settings' component={SettingDashboard}></Route>
                <Route path='/createEvent' component={EventForm}></Route>
              </Container>
            </React.Fragment>
          )}
        ></Route>
      </React.Fragment>
    );
  }
}

export default App;
