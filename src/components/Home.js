import React, { useEffect, useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Card
} from "react-bootstrap";
import JSONPretty from "react-json-pretty";
import facade from "../apiFacade";

export default function Home() {
  const [data, setData] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    facade.fetchHotel(id).then(res => setData(res));
  }, [id]);
  return (
    <Container>
      <br />
      <br />
      <InputGroup className="mb-3">
        <FormControl
          id="id"
          onChange={event => {
            setId(event.target.value);
          }}
          type="text"
          placeholder="Search"
          value={id}
          aria-label="Search"
          aria-describedby="basic-addon2"
        />

        <InputGroup.Append></InputGroup.Append>
      </InputGroup>

      <Card className="text-center">
        <Card.Body>
          <Card.Title>Hotels:</Card.Title>
          <Card.Text>
            <JSONPretty id="json-pretty" data={data}></JSONPretty>}
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </Container>
  );
}
