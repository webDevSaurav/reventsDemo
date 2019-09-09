import React, { Component } from 'react'
import EventListItem from './EventListItem'

export default class EventList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.events.map((event) => {
                    return <EventListItem key={event.id} event = {event}/>
                })}
            </React.Fragment>
        )
    }
}
