import React, { useState } from "react";
import { Container, Form, Button, Header } from "semantic-ui-react";
import { createTask } from "../api";

export default function CreateTask({ token, setLoading }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const handleCreateTask = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { success } = await createTask({ title, desc, token });
    setLoading(false);
    if (!success) {
      setError("Session Expired");
      router.push("/login");
    } else {
      setTitle("");
      setDesc("");
      setError("");
    }
  };

  return (
    <Container style={{ paddingBottom: 40 }}>
      <Header as="h2" content="Create Task" />
      <Form onSubmit={handleCreateTask}>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="title of the task .."
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder="description of the task .."
            required
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </Form.Field>
        <Button type="submit" size="large" positive>
          Submit
        </Button>
        {error && <Message error header={error} />}
      </Form>
    </Container>
  );
}
