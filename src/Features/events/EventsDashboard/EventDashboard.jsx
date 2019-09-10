import React, { Component } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const events = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

export default class EventDashboard extends Component {
  state = {
    events: events,
    isOpen: false,
    selectedEvent: null
  };
  // handleIsOpenToggle = () => {
  //   this.setState(prevState => ({
  //     isOpen: !prevState.isOpen
  //   }));
  // };
  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };
  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };
  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false
    }));
  };
  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };
  handleUpdateEvent = updatedEvent => {
    this.setState(preState => ({
      events: preState.events.map(event => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    }));
  };
  handleDeleteEvent = selectedEvent => {
    this.setState(prevState => ({
      events: prevState.events.filter(event => {
        return event.id !== selectedEvent.id;
      })
    }));
  };
  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <GridColumn width={10}>
          <h2>
            <EventList
              selectEvent={this.handleSelectEvent}
              deleteEvent={this.handleDeleteEvent}
              events={events}
            ></EventList>
          </h2>
        </GridColumn>
        <GridColumn width={6}>
          <Button
            positive
            content='Create Event'
            onClick={this.handleCreateFormOpen}
          ></Button>
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
            />
          )}
        </GridColumn>
      </Grid>
    );
  }
}
