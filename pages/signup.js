import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

import { useRouter } from "next/router";
import { signup } from "../api";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { success, msg } = await signup({ username, password });
    setLoading(false);
    if (!success) {
      setError(msg);
    } else {
      setUsername("");
      setPassword("");
      setError("");
      router.push("/login?signup=success");
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "80vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Signup for a new account
        </Header>
        <Form size="large" onSubmit={handleSignup}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button color="teal" fluid size="large" loading={loading}>
              Sign Up
            </Button>
          </Segment>
        </Form>
        {error && <Message error header={error} />}

        <Message>
          Already have an account? &nbsp;&nbsp;<a href="/login">Log in</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;
