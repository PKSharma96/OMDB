import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
        <h4>My Dashboard</h4>
        <Nav className="flex-column">
          <Nav.Link className="text-white" href="#">Home</Nav.Link>
          <Nav.Link className="text-white" href="#">Analytics</Nav.Link>
          <Nav.Link className="text-white" href="#">Reports</Nav.Link>
          <Nav.Link className="text-white" href="#">Settings</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Navbar */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="ms-3">Dashboard</Navbar.Brand>
        </Navbar>

        <Container className="mt-4">
          <Row>
            {/* Cards */}
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Total Users</Card.Title>
                  <Card.Text>1,250</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Sales</Card.Title>
                  <Card.Text>$25,000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Active Sessions</Card.Title>
                  <Card.Text>320</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};