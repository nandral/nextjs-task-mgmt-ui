import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

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
      <Button primary size="huge" as="a" href="/signup">
        Register and Get Started
        <Icon name="right arrow" />
      </Button>
    </Container>
  </Segment>
);

export default HomepageHeading;
