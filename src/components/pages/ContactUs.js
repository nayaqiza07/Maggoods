import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="cu">
      <Container className="cu-container">
        <Row className="cu-title mb-5">
          <Col>
            <h1>Hubungi Kami</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>Hubungi kami melalui media sosial di bawah</Card.Body>
              <Row>
                <Col>
                  <Button
                    variant="light"
                    className="mt-5 mb-5"
                    href="https://www.instagram.com/maggoods.yk/?hl=en"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                      alt="instagram"
                      className="cu-gambar"
                    />
                    <p>Instagram</p>
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="light"
                    className="mt-5 mb-5"
                    href="https://www.facebook.com/"
                  >
                    <img
                      src="https://habitat-nola.org/wp-content/uploads/2017/02/facebook-icon-preview-1.png"
                      alt="facebook"
                      className="cu-gambar"
                    />
                    <p>Facebook</p>
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="light"
                    className="mt-5 mb-5"
                    href="https://www.twitter.com/"
                  >
                    <img
                      src="https://pnggrid.com/wp-content/uploads/2021/07/Twitter-Logo-Square.png"
                      alt="twitter"
                      className="cu-gambar"
                    />
                    <p>Twitter</p>
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="light"
                    className="mt-5 mb-5"
                    href="https://api.whatsapp.com/send?phone=085888808593"
                  >
                    <img
                      src="https://w7.pngwing.com/pngs/1010/451/png-transparent-whatsapp-logo-whatsapp-logo-computer-icons-messenger-text-grass-mobile-phones.png"
                      alt="whatsapp"
                      className="cu-gambar"
                    />
                    <p>Whatsapp</p>
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="light"
                    className="mt-5 mb-5"
                    href="https://www.tiktok.com/"
                  >
                    <img
                      src="https://pngset.com/images/tiktok-logo-alphabet-text-symbol-transparent-png-2426741.png"
                      alt="Tiktok"
                      className="cu-gambar"
                    />
                    <p>Tiktok</p>
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
