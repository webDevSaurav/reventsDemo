import React from "react";
import {
  Segment,
  Container,
  Header,
  Image,
  Icon,
  Button
} from "semantic-ui-react";

const HomePage = props => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button
          size='huge'
          onClick={() => props.history.push("/events")}
          inverted
        >
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
