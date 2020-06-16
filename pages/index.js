import React, { useEffect, useState, Fragment } from "react";
import {
  Card,
  Container,
  Select,
  Grid,
  Label,
  Dimmer,
  Loader,
  Divider,
  Header,
  Button,
  Icon,
} from "semantic-ui-react";
import _ from "lodash";
import Context from "../store/Context";
import Layout from "../components/Layout";
import { getTasks, updateStatus, deleteTask } from "../api";
import { STATUS_OPTIONS } from "../api/constants";
import CreateTask from "../components/CreateTask";
import HeadingForAnonymousUsers from "../components/HomepageHeading";

export default function Home() {
  const store = Context.useContainer();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (store.token) {
      localStorage.setItem("token", store.token);
    } else {
      const tokenReHydrated = localStorage.getItem("token");
      store.saveToken(tokenReHydrated);
    }

    if (store.token) {
      fetchTasks(store.token);
    }
  }, [store]);

  const fetchTasks = async (token) => {
    setLoading(true);
    const { success, tasks: tasksFromDB, msg } = await getTasks({ token });
    if (success) {
      setTasks(_.orderBy(tasksFromDB, ["id"], ["desc"]));
    }
    setLoading(false);
  };

  const handleUpdateStatus = async ({ id, status, token }) => {
    setLoading(true);
    await updateStatus({ id, status, token });
    await fetchTasks(token);
    setLoading(false);
  };

  const handleDelete = async ({ id, token }) => {
    setLoading(true);
    await deleteTask({ id, token });
    await fetchTasks(token);
    setLoading(false);
  };

  return (
    <Context.Provider>
      <Layout token={!!store.token}>
        <div>
          {!store.token && <HeadingForAnonymousUsers />}

          <Container style={{ marginTop: 90 }}>
            <Dimmer active={loading}>
              <Loader size="massive">Loading</Loader>
            </Dimmer>
            {store.token && (
              <Fragment>
                <CreateTask
                  token={store.token}
                  setLoading={async () => {
                    setLoading(true);
                    await fetchTasks(store.token);
                    setLoading(false);
                  }}
                />
                <Divider horizontal>
                  <Header as="h3">Your Tasks</Header>
                </Divider>
                <Card.Group>
                  {tasks.length > 0 &&
                    tasks.map(({ id, title, desc, status }) => {
                      return (
                        <Card fluid key={id}>
                          <Card.Content>
                            <Card.Header>{title}</Card.Header>
                            <Card.Description>{desc}</Card.Description>
                          </Card.Content>
                          <Card.Content extra>
                            <Grid divided columns={2}>
                              <Grid.Column>
                                <Select
                                  placeholder="Update status"
                                  options={STATUS_OPTIONS}
                                  value={status}
                                  onChange={(e, data) => {
                                    handleUpdateStatus({
                                      id,
                                      status: data.value,
                                      token: store.token,
                                    });
                                  }}
                                />
                              </Grid.Column>
                              <Grid.Column>
                                <Button
                                  as="div"
                                  labelPosition="left"
                                  onClick={() => {
                                    handleDelete({ id, token: store.token });
                                  }}
                                >
                                  <Label as="a" basic color="red">
                                    Delete
                                  </Label>
                                  <Button icon color="red">
                                    <Icon name="trash" />
                                  </Button>
                                </Button>
                              </Grid.Column>
                            </Grid>
                          </Card.Content>
                        </Card>
                      );
                    })}
                </Card.Group>
              </Fragment>
            )}
          </Container>
        </div>
      </Layout>
    </Context.Provider>
  );
}
