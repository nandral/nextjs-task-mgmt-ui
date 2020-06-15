import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

import { useRouter } from "next/router";
import { login } from "../api";
import Context from "../store/Context";

const Login = ({ signup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const store = Context.useContainer();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(username, password);
    const { success, msg, token } = await login({ username, password });
    setLoading(false);
    if (!success) {
      setError(msg);
    } else {
      setUsername("");
      setPassword("");
      setError("");
      store.saveToken(token);
      router.push("/");
    }
  };

  return (
    <Context.Provider>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          {signup && (
            <Header as="h3" color="green" textAlign="center">
              Signup is successful. Please Login
            </Header>
          )}

          <Header as="h2" color="teal" textAlign="center">
            Login to your account
          </Header>
          <Form size="large" onSubmit={handleLogin}>
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
                Login
              </Button>
            </Segment>
          </Form>
          {error && <Message error header={error} />}

          <Message>
            New to us? &nbsp;&nbsp;<a href="/signup">Sign up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </Context.Provider>
  );
};

Login.getInitialProps = (ctx) => {
  console.log("getInital : ", ctx.pathname, ctx.query);
  return {
    signup: ctx.query.signup,
  };
};

export default Login;
