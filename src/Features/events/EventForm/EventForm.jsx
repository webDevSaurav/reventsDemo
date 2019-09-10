import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

export default class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };
  handleFormOnSubmit = evt => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
  };
  handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
    if (this.props.selectedEvent) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }
  render() {
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormOnSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              placeholder='Event Title'
              value={title}
              onChange={this.handleInputChange}
              name='title'
              autoComplete='off'
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              type='date'
              placeholder='Event Date'
              value={date}
              onChange={this.handleInputChange}
              name='date'
              autoComplete='off'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder='City event is taking place'
              value={city}
              onChange={this.handleInputChange}
              name='city'
              autoComplete='off'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              placeholder='Enter the Venue of the event'
              value={venue}
              onChange={this.handleInputChange}
              name='venue'
              autoComplete='off'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              placeholder='Enter the name of person hosting'
              value={hostedBy}
              onChange={this.handleInputChange}
              name='hostedBy'
              autoComplete='off'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button type='button' onClick={this.props.cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
