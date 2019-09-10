import React, { Component } from "react";
import { Segment, Item, Icon, Button, List } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default class EventListItem extends Component {
  render() {
    const {
      title,
      date,
      description,
      venue,
      hostedBy,
      hostPhotoURL,
      attendees
    } = this.props.event;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header as='a'>{title}</Item.Header>
                <Item.Description>Hosted by {hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> {date} |
            <Icon name='marker' /> {venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {attendees &&
              attendees.map(attendee => {
                return (
                  <EventListAttendee key={attendee.id} attendee={attendee} />
                );
              })}
          </List>
        </Segment>
        <Segment clearing>
          <span>{description}</span>
          <Button as='a' color='teal' floated='right' content='View' />
        </Segment>
      </Segment.Group>
    );
  }
}
