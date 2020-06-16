import React from "react";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";

const HomepageHeading = () => (
  <Segment
    inverted
    textAlign="center"
    style={{ minHeight: 700, padding: "1em 0em" }}
    vertical
  >
    <Container text>
      <Header
        as="h1"
        content="Task Management"
        id="header-anonymous-user"
        inverted
        style={{
          fontSize: "3em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "4em",
        }}
      />
      <Header
        as="h2"
        content="Simple and easy to use system for tracking tasks"
        inverted
        style={{
          fontSize: "1.5em",
          fontWeight: "normal",
          marginTop: "1em",
          marginBottom: "2em",
        }}
      />
      <Button primary size="huge" as="a" href="/signup" id="get-started">
        Register and Get Started
        <Icon name="right arrow" />
      </Button>
    </Container>
  </Segment>
);

export default HomepageHeading;
