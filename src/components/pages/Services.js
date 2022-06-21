import React from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="s">
      <Container className="s-container">
        <Card className="s-card">
          <Card.Body className="s-cardBody">
            <Row className="mt-5">
              <Col>
                <h5>
                  Untuk melakukan penjemputan sampah silahkan klik tombol
                  dibawah ini
                </h5>
                <Button
                  variant="success"
                  className="mt-5"
                  href="https://api.whatsapp.com/send?phone=085888808593"
                >
                  Click here
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Services;
