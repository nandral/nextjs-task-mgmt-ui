import React, { Fragment, useEffect } from "react";
import { Button, Container, Header, Menu, Segment } from "semantic-ui-react";
import Context from "../store/Context";

const Layout = ({ children, token }) => {
  const store = Context.useContainer();

  return (
    <Context.Provider>
      <Fragment>
        <Segment inverted textAlign="center" vertical>
          <Menu fixed="top" inverted size="large">
            <Container>
              <Menu.Item as="a" header href="/">
                <Header as="h2" content="Task Management" inverted />
              </Menu.Item>

              <Menu.Item position="right">
                {!token && (
                  <>
                    <Button as="a" href="/login" primary>
                      Log in
                    </Button>
                    <Button
                      as="a"
                      style={{ marginLeft: "0.5em" }}
                      href="/signup"
                    >
                      Sign Up
                    </Button>
                  </>
                )}
                {token && (
                  <Button
                    as="a"
                    href="/"
                    primary
                    onClick={() => {
                      localStorage.removeItem("token");
                      store.removeToken();
                    }}
                  >
                    Log out
                  </Button>
                )}
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
        {children}
      </Fragment>
    </Context.Provider>
  );
};

export default Layout;
