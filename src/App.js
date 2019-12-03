import React from "react";
import { Navbar, Nav, Row, Col, Spinner } from "react-bootstrap";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import MyReservations from "./components/MyReservations";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "firebase";

export default class App extends React.Component {
  state = {
    user: null,
    loading: true
  };
  componentDidMount() {
    auth().onAuthStateChanged(user => {
      // if (!user) auth().signInAnonymously()
      this.setState({ user, loading: false });
    });
  }
  render() {
    const { user, loading } = this.state;
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Link className="navbar-brand" to="/">
              Hotels.dk
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                {/* {!user && <Link className="nav-link" to="/signup">Sign Up</Link>} */}
                <Link className="nav-link" to="/help">
                  Help
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Row>
            <Col xl={3} lg={4} md={5} sm={6}>
              <Navbar
                style={{
                  height: "100%",
                  alignItems: "flex-start",
                  ...(loading
                    ? { alignItems: "center", justifyContent: "center" }
                    : {})
                }}
                expand="lg"
                bg="light"
                variant="light"
              >
                {loading ? (
                  <Spinner animation="border" />
                ) : !user ? (
                  <Login />
                ) : (
                  <Nav className="flex-column navbar-light bg-light">
                    <Link className="nav-link" to="/my-reservations">
                      My Reservations
                    </Link>
                    <Link className="nav-link" to="/saved-hotels">
                      Saved Hotels
                    </Link>
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </Nav>
                )}
              </Navbar>
            </Col>
            <Col xl={9} lg={8} md={7} sm={6}>
              <div style={{ height: "calc(100vh - 100px)" }}>
                <Switch>
                  <Route path="/help">
                    <Help />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                  <Route path="/my-reservations">
                    <MyReservations
                      user={user}
                      loading={loading}
                      lable="My Hotel Reservations."
                    />
                  </Route>
                  <Route path="/saved-hotels">
                    <MyReservations
                      user={user}
                      loading={loading}
                      lable="My Saved Hotels."
                    />
                  </Route>
                  <Route path="/logout">
                    <Logout />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

function Help() {
  return <h2>Help</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
