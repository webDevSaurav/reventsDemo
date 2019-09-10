import React, { Component } from "react";
import EventListItem from "./EventListItem";

export default class EventList extends Component {
  render() {
    const { selectEvent, events, deleteEvent } = this.props;
    return (
      <React.Fragment>
        {events.map(event => {
          return (
            <EventListItem
              key={event.id}
              event={event}
              selectEvent={selectEvent}
              deleteEvent={deleteEvent}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
