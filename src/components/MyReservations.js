import React from 'react';
import { Button, Container, Card, Spinner } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

export default function MyReservations({ loading, user, lable }) {
    if (!loading && !user) return <Redirect to="/" />
    return loading ? <Spinner animation="border" /> : (
        <Container>
            <br />
            <br />
            <h3>{lable}</h3>
            <br />

            <Card className="text-center">
                <Card.Header>Hotel 1</Card.Header>
                <Card.Body>
                    <Card.Title>Great Hotel With 5 start rating.</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </Container>
    );
}